#include <pebble.h>

static Window *window;
static TextLayer *passage_layer;
static char passage[500];

        enum {
			AKEY_PASSAGE_KEY = 1,
            AKEY_PASSAGE_BOOK_KEY = 2,
            AKEY_PASSAGE_CHAPTER_KEY = 3,
            AKEY_PASSAGE_VERSE_KEY = 4,
            AKEY_NUMBER = 1,
            AKEY_SYMBOL = 2,
            AKEY_TEXT,
        };
        
        enum {
            BOOK = 1,
            CHAPTER = 1,
            VERSE = 1,
        };

static void fetch_passage(void) {
 APP_LOG(APP_LOG_LEVEL_DEBUG, "Entered fetch_passage()");	
 DictionaryIterator *iter;
 app_message_outbox_begin(&iter);
  	
 Tuplet passage_book_tuple = TupletInteger(AKEY_PASSAGE_CHAPTER_KEY, BOOK);
 dict_write_tuplet(iter, &passage_book_tuple);
 
 Tuplet passage_chapter_tuple = TupletInteger(AKEY_PASSAGE_CHAPTER_KEY, CHAPTER);
 dict_write_tuplet(iter, &passage_chapter_tuple);
 
 Tuplet passage_verse_tuple = TupletInteger(AKEY_PASSAGE_CHAPTER_KEY, VERSE);
 dict_write_tuplet(iter, &passage_verse_tuple);	 
 
 Tuplet passage_tuple = TupletCString(AKEY_PASSAGE_KEY, "Error: No Passage Found");		
 dict_write_tuplet(iter, &passage_tuple);
 APP_LOG(APP_LOG_LEVEL_DEBUG, "Sending app message");
 app_message_outbox_send();
 APP_LOG(APP_LOG_LEVEL_DEBUG, "App message Sent");
}


static void in_received_handler(DictionaryIterator *iter, void *context) {
  Tuple *passage_book_tuple = dict_find(iter, AKEY_PASSAGE_CHAPTER_KEY);
  Tuple *passage_chapter_tuple = dict_find(iter, AKEY_PASSAGE_CHAPTER_KEY);
  Tuple *passage_verse_tuple = dict_find(iter, AKEY_PASSAGE_CHAPTER_KEY);
  Tuple *passage_tuple = dict_find(iter, AKEY_PASSAGE_KEY);

  if (passage_tuple) {

    strncpy(passage, passage_tuple->value->cstring, 500);
    
    text_layer_set_text(passage_layer, passage); 
     
    APP_LOG(APP_LOG_LEVEL_DEBUG, "Pebble:Passage: %s", passage_tuple->value->cstring);
    
    
  }
  else {
	  APP_LOG(APP_LOG_LEVEL_DEBUG, "Error: passage_tuple blank!");
  }
  
}

static void in_dropped_handler(AppMessageResult reason, void *context) {
  APP_LOG(APP_LOG_LEVEL_DEBUG, "App Message Dropped!");
}

static void out_failed_handler(DictionaryIterator *failed, AppMessageResult reason, void *context) {
  APP_LOG(APP_LOG_LEVEL_DEBUG, "App Message Failed to Send!");
}

static void app_message_init(void) {
  // Register message handlers
  app_message_register_inbox_received(in_received_handler);
  app_message_register_inbox_dropped(in_dropped_handler);
  app_message_register_outbox_failed(out_failed_handler);
  // Init buffers
  app_message_open(64, 64);
}



static void select_click_handler(ClickRecognizerRef recognizer, void *context) {
  fetch_passage();
}

static void up_click_handler(ClickRecognizerRef recognizer, void *context) {

}

static void down_click_handler(ClickRecognizerRef recognizer, void *context) {

}

static void click_config_provider(void *context) {
  window_single_click_subscribe(BUTTON_ID_SELECT, select_click_handler);
  window_single_click_subscribe(BUTTON_ID_UP, up_click_handler);
  window_single_click_subscribe(BUTTON_ID_DOWN, down_click_handler);
}

static void window_load(Window *window) {
  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_bounds(window_layer);

  passage_layer = text_layer_create((GRect) { .origin = { 0, 72 }, .size = { bounds.size.w, 20 } });
  text_layer_set_text(passage_layer, "Press a button");
  text_layer_set_text_alignment(passage_layer, GTextAlignmentCenter);
  layer_add_child(window_layer, text_layer_get_layer(passage_layer));
}

static void window_unload(Window *window) {
  text_layer_destroy(passage_layer);
}

static void init(void) {
  window = window_create();
  app_message_init();
  window_set_click_config_provider(window, click_config_provider);
  window_set_window_handlers(window, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });
  const bool animated = true;
  window_stack_push(window, animated);
}

static void deinit(void) {
  window_destroy(window);
}
/*
int main(void) {
  init();
  APP_LOG(APP_LOG_LEVEL_DEBUG, "Done initializing, pushed window: %p", window);
  APP_LOG(APP_LOG_LEVEL_DEBUG, "Entering Fetch_passage()");
  psleep(500);
  fetch_passage();
  APP_LOG(APP_LOG_LEVEL_DEBUG, "Starting Event Loop");
  app_event_loop();
  deinit();
}
*/
