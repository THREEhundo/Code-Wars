/** Pagination Helper
 *
 * For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

 pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1

 */

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
	this.collection = collection
	this.itemsPerPage = itemsPerPage
}
// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
	return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
	return Math.ceil(this.itemCount() / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
	// if on last page return remainder
	// if any other page return itemsPerPage
	// else -1
	return pageIndex > this.pageCount() || pageIndex < 0
		? -1
		: pageIndex < this.pageCount()
		? this.itemsPerPage
		: this.collection.length - this.itemsPerPage
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
	// if page 0 index 0 - 3
	// if page 1 index 4 - 5
	// use pageCount
	if (itemIndex > this.itemCount() || itemIndex < 0) return -1
	if (itemIndex < this.itemsPerPage) return 0
	if (itemIndex > this.itemsPerPage && itemIndex < this.itemsPerPage * 2)
		return 1
}

helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)

console.log(helper.itemCount())
console.log(helper.pageCount())
console.log(helper.pageItemCount(-1))
