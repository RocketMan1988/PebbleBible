#include <pebble.h>
/*
static SimpleMenuLayer *simple_menu_layer_MenuOne;

//Number of Sections
static SimpleMenuSection menu_section[0];

// Each section is composed of a number of menu items
static SimpleMenuItem first_menu_item[2];

char msg[10+1+6+1];
extern char hex[]; // Defined in menuExample.c

void MenuOneUnload(Window* detailW)
{
APP_LOG(APP_LOG_LEVEL_INFO, "Destroying Detail Window.");
simple_menu_layer_destroy(simple_menu_layer_MenuOne);
window_destroy(detailW);
}

void MenuOneLoad(Window* detailW)
{
	APP_LOG(APP_LOG_LEVEL_DEBUG, "In MenuOneLoad");

  // Although we already defined NUM_FIRST_MENU_ITEMS, you can define
  // an int as such to easily change the order of menu items later
  int num_a_item = 0;

  // This is an example of how you'd set a simple menu item
  first_menu_item[num_a_item++] = (SimpleMenuItem){
    // You should give each menu item a title and callback
    .title = "New Testament",
  };
  first_menu_item[num_a_item++] = (SimpleMenuItem){
    .title = "Old Testament",
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
  GRect bounds = layer_get_frame(window_layer_MenuOne);

  // Initialize the simple menu layer
  simple_menu_layer_MenuOne = simple_menu_layer_create(bounds, detailW, menu_section, 0, NULL);

  // Add it to the window for display
  layer_add_child(window_get_root_layer(detailW), simple_menu_layer_get_layer(simple_menu_layer_MenuOne));
  
  window_stack_push(detailW, true); // The back button will dismiss the current window, not close the app. So just press back to go back to the master view.

}*/
