#include <pebble.h>

//Create all the required Windows for the applicaion
static Window *detailW;
static Window *booksW;
static Window *loadsW;
static Window *one_year_bibleW;
static Window *new_testementW;
static Window *old_testementW;
static Window *window;
static Window *window_verse_scroll;
static Window* versesW;
static Window* chaptersW;

//Create all the required Menu Layers for the apication
static MenuLayer* chapterMenu;
static MenuLayer* verseMenu;

static SimpleMenuLayer *simple_menu_layer_loads;

//Pre-Define constants to use in the program
#define NUM_MENU_SECTIONS 1
#define NUM_FIRST_MENU_ITEMS 4

//Define all text used within the application
char assignmentOne[20] = "Loading...";
char assignmentTwo[20] = "Loading...";
char assignmentThree[20] = "Loading...";
char assignmentFour[20] = "Loading...";
char day[10] = "Day: 0";
char chapterName[40] = "";
char book_and_chapter[40] = "";

//Keep Track of Top Layer Menu
int NextLastVerseHandlers = 0;

//Define all integers used within the application
int num_a_it = 0;
int num_a_i = 0;
int chapter = 0; //This is really the book...
int verse = 0;
int true_chapter = 0;
int numberOfChapters = 0;
int numberOfVerses = 0;
int verse_selected = 0;
int daily_day = 0;


static SimpleMenuLayer *simple_menu_layer;

static Layer *window_verse_scroll_layer;

static Layer *window_layer_one_year_bible;

// This is a scroll layer
static ScrollLayer *scroll_layer;

// We also use a text layer to scroll in the scroll layer
static TextLayer *text_layer;

char scroll_text[2000] = "Loading...";

static const int vert_scroll_text_padding = 4;

//Number of Sections
static SimpleMenuSection menu_sections[NUM_MENU_SECTIONS];

// Each section is composed of a number of menu items
static SimpleMenuItem first_menu_items[NUM_FIRST_MENU_ITEMS];

//Create the enumerations used to link the Key and actual data transmitted. See Appinfor.json for more information.
        enum {
            AKEY_BOOK = 1,
            AKEY_CHAPTER = 2,
            AKEY_VERSE = 3,
            AKEY_SEARCHTYPE = 4,
            AKEY_PASSAGE = 5,
            AKEY_assignmentOne = 6,
            AKEY_assignmentTwo = 7,
            AKEY_assignmentThree = 8,
            AKEY_assignmentFour = 9,
            AKEY_DAY = 10,
            AKEY_chapterNAME = 11,
        };
 
//This varible is set before the fetch_psg() function is called. The fetch_psg() functionis used to communicate with the JavaScript on the phone.        
static int search_type = 0;
        
        
static SimpleMenuLayer *simple_menu_layer_MenuOne;

//Number of Sections
static SimpleMenuSection menu_section[1];

// Each section is composed of a number of menu items
static SimpleMenuItem first_menu_item[2];

char msg[10+1+6+1];
extern char hex[]; // Defined in menuExample.c



static void version(){
  //APP_LOG(APP_LOG_LEVEL_INFO, "Current App Version is: 1.2");
}





static void fetch_psg(void) {
	
 DictionaryIterator *iter;
 app_message_outbox_begin(&iter);

//Verse of the Day
if(search_type == 1)
{
  ////APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 1");
  //Get the verse of the day
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "verse_of_the_day");
  dict_write_tuplet(iter, &searchtype_tuple);
}
if(search_type == 2)
{
  ////APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 2");
  //Get a random verse
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "random_verse");
  dict_write_tuplet(iter, &searchtype_tuple);
}
if(search_type == 3)
{
  //Get the daily bible plan
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "daily_plan");
  dict_write_tuplet(iter, &searchtype_tuple);

  //Tuplet dayNumber_tuple = TupletInteger(AKEY_DAY, daily_day);
  //dict_write_tuplet(iter, &dayNumber_tuple);

  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 3");
}
if(search_type == 4)
{
// Currently not used any more
}
if(search_type == 5)
{
  //Previous Day
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 5");
  //Currently not used
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "perviousDay");
  dict_write_tuplet(iter, &searchtype_tuple);
}
if(search_type == 6)
{
  //Currently not used
  //Next Day
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 6");
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "nextDay");
  dict_write_tuplet(iter, &searchtype_tuple);
}

if(search_type == 7)
{
  //On load read memory
  //Not used
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 7");
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "load");
  dict_write_tuplet(iter, &searchtype_tuple);
}

if(search_type == 8)
{
  //Unload Write to memory
  //Not used any more
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 8");
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "unload");
  dict_write_tuplet(iter, &searchtype_tuple);
}

if(search_type == 9)
{
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 9");
  //Requet the number of chapters in a book
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "numberOfChapters");
  Tuplet chapterNumber_tuple = TupletInteger(AKEY_CHAPTER, chapter);
  dict_write_tuplet(iter, &searchtype_tuple);
  dict_write_tuplet(iter, &chapterNumber_tuple);
}

if(search_type == 10)
{
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 10");
  //Request the number of Verses in a Chapter
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "numberOfVerses");
  Tuplet verseNumber_tuple = TupletInteger(AKEY_VERSE, verse);
  Tuplet bookNumber_tuple = TupletInteger(AKEY_BOOK, chapter);
  dict_write_tuplet(iter, &searchtype_tuple);
  dict_write_tuplet(iter, &verseNumber_tuple);
  dict_write_tuplet(iter, &bookNumber_tuple);
}

if(search_type == 11)
{
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Search_type = 11");
  //Given the Book, Chapter, and Verse get the verse of the bible
  Tuplet searchtype_tuple = TupletCString(AKEY_SEARCHTYPE, "fetch_verse");
  Tuplet verseNumber_tuple = TupletInteger(AKEY_VERSE, verse);
  Tuplet bookNumber_tuple = TupletInteger(AKEY_BOOK, chapter); //Really the book...
  Tuplet chapterNumber_tuple = TupletInteger(AKEY_CHAPTER, true_chapter);
  dict_write_tuplet(iter, &searchtype_tuple);
  dict_write_tuplet(iter, &verseNumber_tuple);
  dict_write_tuplet(iter, &bookNumber_tuple);
  dict_write_tuplet(iter, &chapterNumber_tuple);
}
 //Send message
 app_message_outbox_send();
 
}



// Function is a call back while you are in the verse menu: If you select a verse it will goto the next verse...
void verse_menu_down_button_callback_Next_Verse_handler(ClickRecognizerRef recognizer, void *context) {

//Logic to get the Next Verse:
verse = verse + 1;
search_type = 11;
strncpy(scroll_text, "Loading...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ", 1000);
layer_mark_dirty(window_verse_scroll_layer);
fetch_psg();
//APP_LOG(
  //APP_LOG_LEVEL_DEBUG, "Loading Verse...");
  
scroll_layer_set_content_offset(scroll_layer, GPointZero, false);
//strcpy(scroll_text, "Random Verse is: Testing to see if this will work. It might take some tweaking, because nothing works the first time...");
  
}

// Function is a call back while you are in the verse menu: If you select a verse it will goto the next verse...
void verse_menu_down_button_callback_Last_Verse_handler(ClickRecognizerRef recognizer, void *context) {

//Logic to get the Next Verse:
verse = verse - 1;
search_type = 11;
strncpy(scroll_text, "Loading...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ", 1000);
layer_mark_dirty(window_verse_scroll_layer);
fetch_psg();
//APP_LOG(
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Loading Verse...");
  
scroll_layer_set_content_offset(scroll_layer, GPointZero, false);
//strcpy(scroll_text, "Random Verse is: Testing to see if this will work. It might take some tweaking, because nothing works the first time...");
  
}

ScrollLayerCallbacks cbacks2;

void config_provider(void *context) {
 // single click 
  window_single_click_subscribe(BUTTON_ID_SELECT, verse_menu_down_button_callback_Next_Verse_handler); 
  //Multiple Clicks
  window_multi_click_subscribe(BUTTON_ID_UP, 3, 10, 0, true, verse_menu_down_button_callback_Last_Verse_handler);
}

//Used to display bible verses
//Used to display a random verse, verse of the day, or the fetched verse.
static void window_verse_scroll_load(Window *window_verse_scroll) {
  window_verse_scroll_layer = window_get_root_layer(window_verse_scroll);
  GRect bounds = layer_get_frame(window_verse_scroll_layer);
  GRect max_text_bounds = GRect(0, 0, bounds.size.w - 10, 2000);

  // Initialize the scroll layer
  scroll_layer = scroll_layer_create(bounds);

  // This binds the scroll layer to the window so that up and down map to scrolling
  // You may use scroll_layer_set_callbacks to add or override interactivity
  scroll_layer_set_click_config_onto_window(scroll_layer, window_verse_scroll);
  
  //if(NextLastVerseHandlers == 1) 
  //{
    cbacks2.click_config_provider = &config_provider;
    scroll_layer_set_callbacks(scroll_layer, cbacks2); 
  //}
  
  // Initialize the text layer
  text_layer = text_layer_create(max_text_bounds);
  text_layer_set_text(text_layer, scroll_text);

  // Change the font to a nice readable one
  // This is system font; you can inspect pebble_fonts.h for all system fonts
  // or you can take a look at feature_custom_font to add your own font
  text_layer_set_font(text_layer, fonts_get_system_font(FONT_KEY_GOTHIC_24_BOLD));

  // Trim text layer and scroll content to fit text box
  GSize max_size = text_layer_get_content_size(text_layer);
  text_layer_set_size(text_layer, max_size);
  scroll_layer_set_content_size(scroll_layer, GSize(bounds.size.w - 10, max_size.h + vert_scroll_text_padding));

  // Add the layers for display
  scroll_layer_add_child(scroll_layer, text_layer_get_layer(text_layer));

  layer_add_child(window_verse_scroll_layer, scroll_layer_get_layer(scroll_layer));
  version();
  
  //window_multi_click_subscribe(BUTTON_ID_DOWN, 2, 10, 0, true, verse_menu_down_button_callback_Next_Verse);

}

//Called when the window_verse_scroll is unloaded
static void window_verse_scroll_unload(Window *window_verse_scroll) {
  text_layer_destroy(text_layer);
  scroll_layer_destroy(scroll_layer);
  window_destroy(window_verse_scroll);
  //NextLastVerseHandlers = 0;
}




char verse_title[14] = "Verse: ";
char verse_number[4] = "";
char verse_final[18] = "";

void verseMenu_select_click(struct MenuLayer *verseMenu, MenuIndex *cell_index, void *callback_context)
{ // Show the detail view when select is pressed.
//showDetail(cell_index); // Defined in detailView.c
verse = (cell_index->row + 1);
//Logic to get the Random Verse:
search_type = 11;
   strncpy(scroll_text, "Loading..                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ", 1000);
fetch_psg();
//strcpy(scroll_text, "Random Verse is: Testing to see if this will work. It might take some tweaking, because nothing works the first time...");

  window_verse_scroll = window_create();
  window_set_window_handlers(window_verse_scroll, (WindowHandlers) {
    .load = window_verse_scroll_load,
    .unload = window_verse_scroll_unload,
  });
  window_stack_push(window_verse_scroll, true /* Animated */);




}
void verseMenu_draw_row(GContext *ctx, const Layer *cell_layer, MenuIndex *cell_index, void *callback_context)
{ // Adding the row number as text on the row cell. 
graphics_context_set_text_color(ctx, GColorBlack); // This is important.
char verse_final[18] = "";
strcat(verse_final, verse_title);
snprintf(verse_number, 4, "%d", (cell_index->row + 1));
strcat(verse_final, verse_number);
//hex+3*cell_index->row 0,4,8,12,...32,35,39,   hex+(4*cell_index->row - cell_index->row/10)
graphics_draw_text(ctx, verse_final, fonts_get_system_font(FONT_KEY_GOTHIC_14), GRect(0,0,layer_get_frame(cell_layer).size.w,layer_get_frame(cell_layer).size.h), GTextOverflowModeTrailingEllipsis, GTextAlignmentCenter, NULL);
// Just saying layer_get_frame(cell_layer) for the 4th argument doesn't work. Probably because the GContext is relative to the cell already, but the cell_layer.frame is relative to the menulayer or the screen or something.
}
void verseMenu_draw_header(GContext *ctx, const Layer *cell_layer, uint16_t section_index, void *callback_context)
{ // Adding the header number as text on the header cell.
//char book_and_chapter[40] = "";
//strcat(book_and_chapter, chapterName);
//snprintf(book_and_chapter, 40, "%d", verse_selected);
graphics_context_set_text_color(ctx, GColorBlack); // This is important.
graphics_draw_text(ctx, chapterName, fonts_get_system_font(FONT_KEY_GOTHIC_14_BOLD), GRect(0,0,layer_get_frame(cell_layer).size.w,layer_get_frame(cell_layer).size.h), GTextOverflowModeTrailingEllipsis, GTextAlignmentCenter, NULL);
}
int16_t verseMenu_get_header_height(struct MenuLayer *verseMenu, uint16_t section_index, void *callback_context)
{ // Always 30px tall for a header cell
return 20;
}
int16_t verseMenu_get_cell_height(struct MenuLayer *verseMenu, MenuIndex *cell_index, void *callback_context)
{ // Always 20px tall for a normal cell
return 40;
}
uint16_t verseMenu_get_num_rows_in_section(struct MenuLayer *verseMenu, uint16_t section_index, void *callback_context)
{ // 3, 6, and 9 rows per section
return (numberOfVerses);
}
uint16_t verseMenu_get_num_sections(struct MenuLayer *verseMenu, void *callback_context)
{ // Always 3 sections
return 1;
}

MenuLayerCallbacks cbacks; 

static void verseMenusMenuUnload(Window *versesW)
{
  //simple_menu_layer_destroy(simple_menu_layer_loads);
  //window_destroy(loadsW);
  window_destroy(versesW);
}

static void loadverses(){
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Load verses");
GRect frame;
versesW = window_create();

//Load Handelers after you launch a verse
//NextLastVerseHandlers = 1;
  
frame = layer_get_bounds(window_get_root_layer(versesW));

verseMenu = menu_layer_create(GRect(0,0,frame.size.w,frame.size.h));
menu_layer_set_click_config_onto_window(verseMenu, versesW); // Sets the Window's button callbacks to the MenuLayer's default button callbacks.
// Set all of our callbacks.
cbacks.get_num_sections = &verseMenu_get_num_sections; // Gets called at the beginning of drawing the table.
cbacks.get_num_rows = &verseMenu_get_num_rows_in_section; // Gets called at the beginning of drawing each section.
cbacks.get_cell_height = &verseMenu_get_cell_height; // Gets called at the beginning of drawing each normal cell.
cbacks.get_header_height = &verseMenu_get_header_height; // Gets called at the beginning of drawing each header cell.
cbacks.select_click = &verseMenu_select_click; // Gets called when select is pressed.
cbacks.draw_row = &verseMenu_draw_row; // Gets called to set the content of a normal cell.
cbacks.draw_header = &verseMenu_draw_header; // Gets called to set the content of a header cell.
// cbacks.selection_changed = &func(struct MenuLayer *menu_layer, MenuIndex new_index, MenuIndex old_index, void *callback_context) // I assume this would be called whenever an up or down button was pressed.
// cbacks.select_long_click = &func(struct MenuLayer *menu_layer, MenuIndex *cell_index, void *callback_context) // I didn't use this.
menu_layer_set_callbacks(verseMenu, NULL, cbacks); // I have no user data to supply to the callback functions, so
layer_add_child(window_get_root_layer(versesW), menu_layer_get_layer(verseMenu));
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "About to puch verses Window");
  
    window_set_window_handlers(versesW, (WindowHandlers) {
    .unload = verseMenusMenuUnload,
    });
  
  
window_stack_push(versesW, true);
}



static Layer *window_layer_loads;

//Number of Sections
static SimpleMenuSection menu_section_loads[1];

// Each section is composed of a number of menu items
static SimpleMenuItem first_menu_item_loads[1]; 

static void loadsMenuUnload(Window *loadsW)
{
//APP_LOG(APP_LOG_LEVEL_INFO, "Destroying Detail Window.");
simple_menu_layer_destroy(simple_menu_layer_loads);
window_destroy(loadsW);
}

static void loadsMenuLoad(Window *loadsW)
{
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "In loads Menu");

  window_set_window_handlers(loadsW, (WindowHandlers) {
    .unload = loadsMenuUnload,
  });
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Handlers Set");
  
    num_a_it = 0;
 

    first_menu_item_loads[num_a_it++] = (SimpleMenuItem){
    .title = "Loading...",
     };

 
  // Bind the menu items to the corresponding menu sections
  menu_section_loads[0] = (SimpleMenuSection){  
    .num_items = 1,
    .items = first_menu_item_loads,
  };

  // Now we prepare to initialize the simple menu layer
  // We need the bounds to specify the simple menu layer's viewport size
  // In this case, it'll be the same as the window's
  window_layer_loads = window_get_root_layer(loadsW);
  GRect bounds_loads = layer_get_frame(window_layer_loads);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE2");
  // Initialize the simple menu layer
  simple_menu_layer_loads = simple_menu_layer_create(bounds_loads, loadsW, menu_section_loads, 1, NULL);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE3");
  // Add it to the window for display
  layer_add_child(window_get_root_layer(loadsW), simple_menu_layer_get_layer(simple_menu_layer_loads));
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "About to push window");
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE4");
  window_stack_push(loadsW, true); // The back button will dismiss the current window, not close the app. So just press back to go back to the master view.
//APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE555");


}




static void menu_select_callback_Verse(int index) {
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Verse");
  search_type = 10;
  verse = index;
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Fetch Psg");
  fetch_psg();
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Window Create");
  loadsW = window_create();
  loadsMenuLoad(loadsW);
}


char chapter_title[14] = "Chapter: ";
char chapter_number[4] = "";
char chapter_final[18] = "";

void chapterMenu_select_click(struct MenuLayer *chapterMenu, MenuIndex *cell_index, void *callback_context)
{ // Show the detail view when select is pressed.
//showDetail(cell_index); // Defined in detailView.c
  true_chapter = (cell_index->row + 1);
  menu_select_callback_Verse((cell_index->row));
}
void chapterMenu_draw_row(GContext *ctx, const Layer *cell_layer, MenuIndex *cell_index, void *callback_context)
{ // Adding the row number as text on the row cell.
graphics_context_set_text_color(ctx, GColorBlack); // This is important.
char chapter_final[18] = "";
strcat(chapter_final, chapter_title);
snprintf(chapter_number, 4, "%d", (cell_index->row + 1));
strcat(chapter_final, chapter_number);
//hex+3*cell_index->row 0,4,8,12,...32,35,39,   hex+(4*cell_index->row - cell_index->row/10)
graphics_draw_text(ctx, chapter_final, fonts_get_system_font(FONT_KEY_GOTHIC_14), GRect(0,0,layer_get_frame(cell_layer).size.w,layer_get_frame(cell_layer).size.h), GTextOverflowModeTrailingEllipsis, GTextAlignmentCenter, NULL);
// Just saying layer_get_frame(cell_layer) for the 4th argument doesn't work. Probably because the GContext is relative to the cell already, but the cell_layer.frame is relative to the menulayer or the screen or something.
}
void chapterMenu_draw_header(GContext *ctx, const Layer *cell_layer, uint16_t section_index, void *callback_context)
{ // Adding the header number as text on the header cell.
graphics_context_set_text_color(ctx, GColorBlack); // This is important.
graphics_draw_text(ctx, chapterName, fonts_get_system_font(FONT_KEY_GOTHIC_14_BOLD), GRect(0,0,layer_get_frame(cell_layer).size.w,layer_get_frame(cell_layer).size.h), GTextOverflowModeTrailingEllipsis, GTextAlignmentCenter, NULL);
}
int16_t chapterMenu_get_header_height(struct MenuLayer *chapterMenu, uint16_t section_index, void *callback_context)
{ // Always 30px tall for a header cell
return 20;
}
int16_t chapterMenu_get_cell_height(struct MenuLayer *chapterMenu, MenuIndex *cell_index, void *callback_context)
{ // Always 20px tall for a normal cell
return 40;
}
uint16_t chapterMenu_get_num_rows_in_section(struct MenuLayer *chapterMenu, uint16_t section_index, void *callback_context)
{ // 3, 6, and 9 rows per section
return (numberOfChapters);
}
uint16_t chapterMenu_get_num_sections(struct MenuLayer *chapterMenu, void *callback_context)
{ // Always 3 sections
return 1;
}

MenuLayerCallbacks cbacks; 

static void chapterMenusMenuUnload(Window *chaptersW)
{
   //Add Here
   //APP_LOG(APP_LOG_LEVEL_DEBUG, "Unload Chapters");
   window_destroy(chaptersW);   
}

static void loadChapters(){
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Load Chapters");
GRect frame;
chaptersW = window_create();

frame = layer_get_bounds(window_get_root_layer(chaptersW));

chapterMenu = menu_layer_create(GRect(0,0,frame.size.w,frame.size.h));
menu_layer_set_click_config_onto_window(chapterMenu, chaptersW); // Sets the Window's button callbacks to the MenuLayer's default button callbacks.
// Set all of our callbacks.
cbacks.get_num_sections = &chapterMenu_get_num_sections; // Gets called at the beginning of drawing the table.
cbacks.get_num_rows = &chapterMenu_get_num_rows_in_section; // Gets called at the beginning of drawing each section.
cbacks.get_cell_height = &chapterMenu_get_cell_height; // Gets called at the beginning of drawing each normal cell.
cbacks.get_header_height = &chapterMenu_get_header_height; // Gets called at the beginning of drawing each header cell.
cbacks.select_click = &chapterMenu_select_click; // Gets called when select is pressed.
cbacks.draw_row = &chapterMenu_draw_row; // Gets called to set the content of a normal cell.
cbacks.draw_header = &chapterMenu_draw_header; // Gets called to set the content of a header cell.
// cbacks.selection_changed = &func(struct MenuLayer *menu_layer, MenuIndex new_index, MenuIndex old_index, void *callback_context) // I assume this would be called whenever an up or down button was pressed.
// cbacks.select_long_click = &func(struct MenuLayer *menu_layer, MenuIndex *cell_index, void *callback_context) // I didn't use this.
menu_layer_set_callbacks(chapterMenu, NULL, cbacks); // I have no user data to supply to the callback functions, so
layer_add_child(window_get_root_layer(chaptersW), menu_layer_get_layer(chapterMenu));
  
      window_set_window_handlers(chaptersW, (WindowHandlers) {
    .unload = chapterMenusMenuUnload,
    });
  
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "About to puch chapters Window");
window_stack_push(chaptersW, true);
}

static Layer *window_layer_books;

static SimpleMenuLayer *simple_menu_layer_books;

//Number of Sections
static SimpleMenuSection menu_section_books[1];

// Each section is composed of a number of menu items
static SimpleMenuItem first_menu_item_books[1]; 

static void booksMenuUnload(Window *booksW)
{
//APP_LOG(APP_LOG_LEVEL_INFO, "Destroying Detail Window.");
simple_menu_layer_destroy(simple_menu_layer_books);
window_destroy(booksW);
}

static void booksMenuLoad(Window *booksW)
{
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In books Menu");

	window_set_window_handlers(booksW, (WindowHandlers) {
    .unload = booksMenuUnload,
  });
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Handlers Set");
  
    num_a_it = 0;
 

    first_menu_item_books[num_a_it++] = (SimpleMenuItem){
    .title = "Loading...",
     };

 
  // Bind the menu items to the corresponding menu sections
  menu_section_books[0] = (SimpleMenuSection){ 
    .num_items = 1,
    .items = first_menu_item_books,
  };

  // Now we prepare to initialize the simple menu layer
  // We need the bounds to specify the simple menu layer's viewport size
  // In this case, it'll be the same as the window's
  window_layer_books = window_get_root_layer(booksW);
  GRect bounds_books = layer_get_frame(window_layer_books);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE2");
  // Initialize the simple menu layer
  simple_menu_layer_books = simple_menu_layer_create(bounds_books, booksW, menu_section_books, 1, NULL);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE3");
  // Add it to the window for display
  layer_add_child(window_get_root_layer(booksW), simple_menu_layer_get_layer(simple_menu_layer_books));
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "About to push window");
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE4");
  window_stack_push(booksW, true); // The back button will dismiss the current window, not close the app. So just press back to go back to the master view.
//APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE555");


}




static void menu_select_callback_Old_Testement_Books(int index, void *ctx) {
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In Old Testement Books");
	search_type = 9;
	chapter = index;
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "Fetch Psg");
	fetch_psg();
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "Window Create");
	booksW = window_create();
	booksMenuLoad(booksW);
}

static void menu_select_callback_New_Testement_Books(int index, void *ctx) {
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In New Testement Books");
  search_type = 9;
  chapter = index + 39;
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Fetch Psg");
  fetch_psg();
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Window Create");
  booksW = window_create();
  booksMenuLoad(booksW);

}





static SimpleMenuLayer *simple_menu_layer_new_testement;

//Number of Sections
static SimpleMenuSection menu_section_new_testement[1];

// Each section is composed of a number of menu items
static SimpleMenuItem first_menu_item_new_testement[27];

static void newTestementMenuUnload(Window *new_testement)
{
//APP_LOG(APP_LOG_LEVEL_INFO, "Destroying Detail Window.");
simple_menu_layer_destroy(simple_menu_layer_new_testement);
window_destroy(new_testementW);
}

static void newTestementMenuLoad(Window *new_testementW)
{
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In newTestementMenu");

	window_set_window_handlers(new_testementW, (WindowHandlers) {
    .unload = newTestementMenuUnload,
  });
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Handlers Set");
  
    int num_a_ite = 0;
 

    first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Mathew",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Mark",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Luke",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "John",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Acts",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Romans",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "1 Corinthians",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "2 Corinthians",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Galatians",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Ephesians",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Philippians",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Colossians",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "1 Thessalonians",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "2 Thessalonians",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "1 Timothy",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "2 Timothy",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Titus",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Philemon",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Hebrews",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "James",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "1 Peter",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "2 Peter",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "1 John",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "2 John",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "3 John",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
  first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Jude",
    .callback = menu_select_callback_New_Testement_Books,
  };
      first_menu_item_new_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Revelation",
    .callback = menu_select_callback_New_Testement_Books,
     };
  
 
  // Bind the menu items to the corresponding menu sections
  menu_section_new_testement[0] = (SimpleMenuSection){
	//.title = "Bible:",  
    .num_items = 27,
    .items = first_menu_item_new_testement,
  };

  // Now we prepare to initialize the simple menu layer
  // We need the bounds to specify the simple menu layer's viewport size
  // In this case, it'll be the same as the window's
  Layer *window_layer_new_testement = window_get_root_layer(new_testementW);
  GRect bounds_new_testement = layer_get_frame(window_layer_new_testement);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE2");
  // Initialize the simple menu layer
  simple_menu_layer_new_testement = simple_menu_layer_create(bounds_new_testement, new_testementW, menu_section_new_testement, 1, NULL);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE3");
  // Add it to the window for display
  layer_add_child(window_get_root_layer(new_testementW), simple_menu_layer_get_layer(simple_menu_layer_new_testement));
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "About to push window");
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE4");
  window_stack_push(new_testementW, true); // The back button will dismiss the current window, not close the app. So just press back to go back to the master view.
//APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE5");


}






static SimpleMenuLayer *simple_menu_layer_old_testement;

//Number of Sections
static SimpleMenuSection menu_section_old_testement[1];

// Each section is composed of a number of menu items
static SimpleMenuItem first_menu_item_old_testement[39];

static void oldTestementMenuUnload(Window *old_testement)
{
//APP_LOG(APP_LOG_LEVEL_INFO, "Destroying Detail Window.");
simple_menu_layer_destroy(simple_menu_layer_old_testement);
window_destroy(old_testementW);
}

static void oldTestementMenuLoad(Window *old_testementW)
{
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In oldTestementMenu");

	window_set_window_handlers(old_testementW, (WindowHandlers) {
    .unload = oldTestementMenuUnload,
  });
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Handlers Set");
  
    int num_a_ite = 0;
 

    first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Genesis",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Exodus",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Leviticus",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Numbers",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Deuteronomy",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Joshua",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Judges",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Ruth",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "1 Samuel",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "2 Samuel",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "1 Kings",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "2 Kings",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "1 Chronicles",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "2 Chronicles",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Ezra",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Nehemiah",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Esther",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Job",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Psalm",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Proverbs",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Ecclesiastes",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Song of Solomon",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Isaiah",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Jeremiah",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Lamentations",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
  first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Ezekiel",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Daniel",
    .callback = menu_select_callback_Old_Testement_Books,
     };
     
       first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Hosea",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Joel",
    .callback = menu_select_callback_Old_Testement_Books,
     };
     
       first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Amos",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Obadiah",
    .callback = menu_select_callback_Old_Testement_Books,
     };
     
       first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Jonah",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Micah",
    .callback = menu_select_callback_Old_Testement_Books,
     };
     
       first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Nahum",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Habakkuk",
    .callback = menu_select_callback_Old_Testement_Books,
     };
     
       first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Zephaniah",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Haggai",
    .callback = menu_select_callback_Old_Testement_Books,
     };
     
       first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Zechariah",
    .callback = menu_select_callback_Old_Testement_Books,
  };
      first_menu_item_old_testement[num_a_ite++] = (SimpleMenuItem){
    .title = "Malachi",
    .callback = menu_select_callback_Old_Testement_Books,
     };
  
 
  // Bind the menu items to the corresponding menu sections
  menu_section_old_testement[0] = (SimpleMenuSection){
	//.title = "Bible:",  
    .num_items = 39,
    .items = first_menu_item_old_testement,
  };

  // Now we prepare to initialize the simple menu layer
  // We need the bounds to specify the simple menu layer's viewport size
  // In this case, it'll be the same as the window's
  Layer *window_layer_old_testement = window_get_root_layer(old_testementW);
  GRect bounds_old_testement = layer_get_frame(window_layer_old_testement);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE2");
  // Initialize the simple menu layer
  simple_menu_layer_old_testement = simple_menu_layer_create(bounds_old_testement, old_testementW, menu_section_old_testement, 1, NULL);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE3");
  // Add it to the window for display
  layer_add_child(window_get_root_layer(old_testementW), simple_menu_layer_get_layer(simple_menu_layer_old_testement));
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "About to push window");
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE4");
  window_stack_push(old_testementW, true); // The back button will dismiss the current window, not close the app. So just press back to go back to the master view.
//APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE55");


}

static void menu_select_callback_New_Testement(int index, void *ctx) {
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In New Testement");
	version();
	new_testementW = window_create();	
	newTestementMenuLoad(new_testementW);
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "Window Pushed");

}

static void menu_select_callback_Old_Testement(int index, void *ctx) {
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In Old Testement");
version();
	old_testementW = window_create();	
	oldTestementMenuLoad(old_testementW);
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "Window Pushed");
}

static void MenuOneUnload(Window *detailW)
{
//APP_LOG(APP_LOG_LEVEL_INFO, "Destroying Detail Window.");
simple_menu_layer_destroy(simple_menu_layer_MenuOne);
window_destroy(detailW);
}

static void MenuOneLoad(Window *detailW)
{
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In MenuOneLoad");

    //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Bible Lookup");

	//APP_LOG(APP_LOG_LEVEL_DEBUG, "Window Created");

	window_set_window_handlers(detailW, (WindowHandlers) {
    .unload = MenuOneUnload,
  });
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Handlers Set");

  // Although we already defined NUM_FIRST_MENU_ITEMS, you can define
  // an int as such to easily change the order of menu items later
  int num_a_item = 0;

  // This is an example of how you'd set a simple menu item
    first_menu_item[num_a_item++] = (SimpleMenuItem){
    .title = "Old Testament",
    .callback = menu_select_callback_Old_Testement,
  };
  first_menu_item[num_a_item++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "New Testament",
    .callback = menu_select_callback_New_Testement,
  };

  // Bind the menu items to the corresponding menu sections
  menu_section[0] = (SimpleMenuSection){
	//.title = "Bible:",  
    .num_items = 2,
    .items = first_menu_item,
  };

  // Now we prepare to initialize the simple menu layer
  // We need the bounds to specify the simple menu layer's viewport size
  // In this case, it'll be the same as the window's
  Layer *window_layer_MenuOne = window_get_root_layer(detailW);
  GRect bound = layer_get_frame(window_layer_MenuOne);
//APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE2");
  // Initialize the simple menu layer
  simple_menu_layer_MenuOne = simple_menu_layer_create(bound, detailW, menu_section, 1, NULL);
//APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE3");
  // Add it to the window for display
  layer_add_child(window_get_root_layer(detailW), simple_menu_layer_get_layer(simple_menu_layer_MenuOne));
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "About to push window");
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE4");
  window_stack_push(detailW, true); // The back button will dismiss the current window, not close the app. So just press back to go back to the master view.
//APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE5");
}
        
        

static void in_received_handler(DictionaryIterator *iter, void *context) {	
	
  //Tuple *searchtype_tuple = dict_find(iter, AKEY_SEARCHTYPE);
 
 if(search_type == 1)
{
  Tuple *passage_tuple = dict_find(iter, AKEY_PASSAGE);
  strncpy(scroll_text, passage_tuple->value->cstring, 1000);
  layer_mark_dirty(window_verse_scroll_layer);			
}
 if(search_type == 2)
{
  Tuple *passage_tuple = dict_find(iter, AKEY_PASSAGE);
  strncpy(scroll_text, passage_tuple->value->cstring, 1000); 
  layer_mark_dirty(window_verse_scroll_layer);	
}
 if(search_type == 3)
{

	  //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Search_Type 3 Recieve(PEBBLE).");
  Tuple *passage_tuple = dict_find(iter, AKEY_assignmentOne);
  strncpy(assignmentOne, passage_tuple->value->cstring, 20); 
  
    Tuple *passage2_tuple = dict_find(iter, AKEY_assignmentTwo);
  strncpy(assignmentTwo, passage2_tuple->value->cstring, 20); 
  
    Tuple *passage3_tuple = dict_find(iter, AKEY_assignmentThree);
  strncpy(assignmentThree, passage3_tuple->value->cstring, 20); 
  
    Tuple *passage4_tuple = dict_find(iter, AKEY_assignmentFour);
  strncpy(assignmentFour, passage4_tuple->value->cstring, 20); 
  
  
  Tuple *passage5_tuple = dict_find(iter, AKEY_DAY);
  strcpy(day,"Day: ");
  strcat(day, passage5_tuple->value->cstring); 
  
  layer_mark_dirty(window_layer_one_year_bible);	
  ////APP_LOG(APP_LOG_LEVEL_DEBUG, scroll_text);
}
 if(search_type == 4)
{
    
}
   if(search_type == 5)
{

	  //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Search_Type 3 Recieve(PEBBLE).");
  Tuple *passage_tuple = dict_find(iter, AKEY_assignmentOne);
  strncpy(assignmentOne, passage_tuple->value->cstring, 20); 
  
    Tuple *passage2_tuple = dict_find(iter, AKEY_assignmentTwo);
  strncpy(assignmentTwo, passage2_tuple->value->cstring, 20); 
  
    Tuple *passage3_tuple = dict_find(iter, AKEY_assignmentThree);
  strncpy(assignmentThree, passage3_tuple->value->cstring, 20); 
  
    Tuple *passage4_tuple = dict_find(iter, AKEY_assignmentFour);
  strncpy(assignmentFour, passage4_tuple->value->cstring, 20); 
  
  
  Tuple *passage5_tuple = dict_find(iter, AKEY_DAY);
  strcpy(day,"Day: ");
  strcat(day, passage5_tuple->value->cstring); 
  
  layer_mark_dirty(window_layer_one_year_bible);	
  ////APP_LOG(APP_LOG_LEVEL_DEBUG, scroll_text);
}
   if(search_type == 6)
{

	  //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Search_Type 3 Recieve(PEBBLE).");
  Tuple *passage_tuple = dict_find(iter, AKEY_assignmentOne);
  strncpy(assignmentOne, passage_tuple->value->cstring, 20); 
  
    Tuple *passage2_tuple = dict_find(iter, AKEY_assignmentTwo);
  strncpy(assignmentTwo, passage2_tuple->value->cstring, 20); 
  
    Tuple *passage3_tuple = dict_find(iter, AKEY_assignmentThree);
  strncpy(assignmentThree, passage3_tuple->value->cstring, 20); 
  
    Tuple *passage4_tuple = dict_find(iter, AKEY_assignmentFour);
  strncpy(assignmentFour, passage4_tuple->value->cstring, 20); 
  
  
  Tuple *passage5_tuple = dict_find(iter, AKEY_DAY);
  strcpy(day,"Day: ");
  strcat(day, passage5_tuple->value->cstring); 
  
  layer_mark_dirty(window_layer_one_year_bible);	
  ////APP_LOG(APP_LOG_LEVEL_DEBUG, scroll_text);
}

 if(search_type == 9)
{
    Tuple *chapter_tuple = dict_find(iter, AKEY_CHAPTER);
    numberOfChapters = chapter_tuple->value->uint32;

    Tuple *chapterName_tuple = dict_find(iter, AKEY_chapterNAME);
    strncpy(chapterName, chapterName_tuple->value->cstring, 40); 

    //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Search Type 9: ");
    loadChapters();
}

 if(search_type == 10)
{
    Tuple *verse_tuple = dict_find(iter, AKEY_VERSE);
    numberOfVerses = verse_tuple->value->uint32;
    //APP_LOG(APP_LOG_LEVEL_DEBUG, "In Search Type 10: ");
    loadverses();
}

 if(search_type == 11)
{
  Tuple *passage_tuple = dict_find(iter, AKEY_PASSAGE);
  strncpy(scroll_text, passage_tuple->value->cstring, 1000); 
  layer_mark_dirty(window_verse_scroll_layer);  
}
  
  }

static void in_dropped_handler(AppMessageResult reason, void *context) {
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "App Message Dropped!");
}

static void out_failed_handler(DictionaryIterator *failed, AppMessageResult reason, void *context) {
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "App Message Failed to Send!");
}

static void app_message_init(void) {
  // Register message handlers
  app_message_register_inbox_received(in_received_handler);
  app_message_register_inbox_dropped(in_dropped_handler);
  app_message_register_outbox_failed(out_failed_handler);
  // Init buffers
  app_message_open(2000, 2000);
  version();
}




static void menu_select_callback_Random_Verse(int index, void *ctx) {

//Logic to get the Random Verse:
search_type = 2;
   strncpy(scroll_text, "Loading..                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ", 1000);
fetch_psg();
//strcpy(scroll_text, "Random Verse is: Testing to see if this will work. It might take some tweaking, because nothing works the first time...");

  window_verse_scroll = window_create();
  window_set_window_handlers(window_verse_scroll, (WindowHandlers) {
    .load = window_verse_scroll_load,
    .unload = window_verse_scroll_unload,
  });
  window_stack_push(window_verse_scroll, true /* Animated */);

}



static void menu_select_callback_oneyearbible_menu(int index, void *ctx) {

if (index == 0){
  //Pervious Day

  //daily_day = daily_day - 1;

    if (daily_day < 0){
      daily_day = 0;
    }

  search_type = 5;
  fetch_psg();

  //Add Back later
	//APP_LOG(APP_LOG_LEVEL_INFO, "Index = 0");
	//search_type = 5;
	//fetch_psg();
	//search_type = 3;
}
if (index == 5){
	//Next Day

  //daily_day = daily_day + 1;

    if (daily_day > 364){
      daily_day = 0;
    }


  search_type = 6;
  fetch_psg();

  //Add Back Next Day
  //APP_LOG(APP_LOG_LEVEL_INFO, "Index = 5");
	//search_type = 6;
	//fetch_psg();
	//search_type = 3;
}


}





static SimpleMenuLayer *simple_menu_layer_one_year_bible;

//Number of Sections
static SimpleMenuSection menu_section_one_year_bible[1];

// Each section is composed of a number of menu items
static SimpleMenuItem first_menu_item_one_year_bible[6];

static void oneYearBibletMenuUnload(Window *one_year_bibleW)
{
//APP_LOG(APP_LOG_LEVEL_INFO, "Destroying Detail Window.");
simple_menu_layer_destroy(simple_menu_layer_one_year_bible);
window_destroy(one_year_bibleW);
}

static void oneYearBibleMenuLoad(Window *one_year_bibleW)
{
	//APP_LOG(APP_LOG_LEVEL_DEBUG, "In one_year_bible Menu");

	window_set_window_handlers(one_year_bibleW, (WindowHandlers) {
    .unload = oneYearBibletMenuUnload,
  });
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Handlers Set");
  
    int num_a_ite = 0;
 

    first_menu_item_one_year_bible[num_a_ite++] = (SimpleMenuItem){
    .title = "<-- Pervious Day",
    .callback = menu_select_callback_oneyearbible_menu,
     };
  
  first_menu_item_one_year_bible[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = assignmentOne,
  };
      first_menu_item_one_year_bible[num_a_ite++] = (SimpleMenuItem){
    .title = assignmentTwo,
     };
  
  first_menu_item_one_year_bible[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = assignmentThree,
  };
           first_menu_item_one_year_bible[num_a_ite++] = (SimpleMenuItem){
    .title = assignmentFour,
     };
  
  first_menu_item_one_year_bible[num_a_ite++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Next Day -->",
    .callback = menu_select_callback_oneyearbible_menu,
  };

 
  // Bind the menu items to the corresponding menu sections
  menu_section_one_year_bible[0] = (SimpleMenuSection){
	.title = day,  
    .num_items = 6,
    .items = first_menu_item_one_year_bible,
  };

  // Now we prepare to initialize the simple menu layer
  // We need the bounds to specify the simple menu layer's viewport size
  // In this case, it'll be the same as the window's
  window_layer_one_year_bible = window_get_root_layer(one_year_bibleW);
  GRect bounds_one_year_bible = layer_get_frame(window_layer_one_year_bible);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE2");
  // Initialize the simple menu layer
  simple_menu_layer_one_year_bible = simple_menu_layer_create(bounds_one_year_bible, one_year_bibleW, menu_section_one_year_bible, 1, NULL);
////APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE3");
  // Add it to the window for display
  layer_add_child(window_get_root_layer(one_year_bibleW), simple_menu_layer_get_layer(simple_menu_layer_one_year_bible));
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "About to push window");
 // //APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE4");
  window_stack_push(one_year_bibleW, true); // The back button will dismiss the current window, not close the app. So just press back to go back to the master view.
//APP_LOG(APP_LOG_LEVEL_DEBUG, "HERE555");


}










static void menu_select_callback_Verse_of_the_Day(int index, void *ctx) {
//Logic to get the Verse f the Day:
search_type = 1;
  strncpy(scroll_text, "Loading..                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ", 1000);
fetch_psg();
//strcpy(scroll_text, "Verse of the Day is: Testing to see if this will work. It might take some tweaking, because nothing works the first time...");

  window_verse_scroll = window_create();
  window_set_window_handlers(window_verse_scroll, (WindowHandlers) {
    .load = window_verse_scroll_load,
    .unload = window_verse_scroll_unload,
  });
  window_stack_push(window_verse_scroll, true /* Animated */);

}

static void menu_select_callback_oneyearbible(int index, void *ctx) {
//APP_LOG(APP_LOG_LEVEL_DEBUG, "In One Year Bible");
	version();
	one_year_bibleW = window_create();	
	oneYearBibleMenuLoad(one_year_bibleW);

  //Read or create a day...
  //if (persist_exists(1)) {
  //  APP_LOG(APP_LOG_LEVEL_DEBUG, "Day Exists");
  //  daily_day = persist_read_int(1);


  //  if (daily_day < 0){
  //    daily_day = 0;
  //  }
  //  if (daily_day > 364){
  //   daily_day = 0;
  //  }

  //}
  //else {
  //  APP_LOG(APP_LOG_LEVEL_DEBUG, "Day doesn't Exists");
  //  persist_write_int(1, 0);
  //  daily_day = 0;
  //}

	//APP_LOG(APP_LOG_LEVEL_DEBUG, "Window Pushed");
	search_type = 3;
    fetch_psg();
}

static void menu_select_callback_bible_lookup(int index, void *ctx) {
  detailW = window_create();	
  MenuOneLoad(detailW);

}

static void window_load(Window *window) {
	
  // Although we already defined NUM_FIRST_MENU_ITEMS, you can define
  // an int as such to easily change the order of menu items later
  int num_a_items = 0;

  // This is an example of how you'd set a simple menu item
  first_menu_items[num_a_items++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "Bible LookUp",
    .callback = menu_select_callback_bible_lookup,
  };
  first_menu_items[num_a_items++] = (SimpleMenuItem){
    .title = "1 Year Bible",
    .callback = menu_select_callback_oneyearbible,
  };
    // The menu items appear in the order saved in the menu items array
  first_menu_items[num_a_items++] = (SimpleMenuItem){
    .title = "Verse of the Day",
    .callback = menu_select_callback_Verse_of_the_Day,
    //.subtitle = "Here's a subtitle",
  };
    first_menu_items[num_a_items++] = (SimpleMenuItem){
    .title = "Random Verse",
    .callback = menu_select_callback_Random_Verse,
  };

  

  // Bind the menu items to the corresponding menu sections
  menu_sections[0] = (SimpleMenuSection){
	//.title = "Bible:",  
    .num_items = NUM_FIRST_MENU_ITEMS,
    .items = first_menu_items,
  };

  // Now we prepare to initialize the simple menu layer
  // We need the bounds to specify the simple menu layer's viewport size
  // In this case, it'll be the same as the window's
  Layer *window_layer = window_get_root_layer(window);
  GRect bounds = layer_get_frame(window_layer);

  // Initialize the simple menu layer
  simple_menu_layer = simple_menu_layer_create(bounds, window, menu_sections, NUM_MENU_SECTIONS, NULL);

  // Add it to the window for display
  layer_add_child(window_layer, simple_menu_layer_get_layer(simple_menu_layer));
  version();
  
}

static void window_unload(Window *window) {
  simple_menu_layer_destroy(simple_menu_layer);
  
  search_type = 8;
  fetch_psg();
}

static void init(void) {
  window = window_create();
  app_message_init();

  // Setup the window handlers
  window_set_window_handlers(window, (WindowHandlers) {
    .load = window_load,
    .unload = window_unload,
  });

  window_stack_push(window, true /* Animated */);
  version();
}

static void deinit(void) {
  window_destroy(window);

    //persist_write_int(1, daily_day);
//APP_LOG(APP_LOG_LEVEL_DEBUG, "Just wrote to memory");
}

int main(void) {
  init();
  //APP_LOG(APP_LOG_LEVEL_DEBUG, "Done initializing, pushed window: %p", window);

  app_event_loop();
  deinit();
}
