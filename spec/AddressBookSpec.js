describe('Address Book', function(){
	it('should be able to add a contact', function() {
		var addressBook = new AddressBook();
			thisContact = new COntact();

		addressBook.addContact(thisContact);

		expect(addressBook.getContact(0)).toBe(thisContact);
	});
});