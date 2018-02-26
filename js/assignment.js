// Copyright Jason Daniels 2018 Licensed under the Academic Free License version 3.0

function Assignment(id, city, state, order, owner) {
    return {
      id: id,
      city: city,
      state: state,
      order: order,
      owner: owner,
      toString: function() {
        return '' + id + ' ' + city + ' ' + state + ' ' + order + ' ' + owner;
      }
    };
}

function DialService(number, pin) {
  return {number: number, pin: pin};
}

function AssignmentViewModel(dialService, assignment) {
  return {
    filter: '',
    tableRow: function() {
      if (!this.filterMatches(assignment)) { return ""; }

      var trackingNumber = assignment.order;
      var checkInNumber = dialService.number + ",1," + dialService.pin + "#,," + trackingNumber + "#,,#";
      var checkOutNumber = dialService.number + ",1," + dialService.pin + "#,," + trackingNumber + ",#,,#,1,#,,2,#";
      var checkInLink = "<a href=\"tel:" + checkInNumber + "\">Check-In</a>";
      var checkOutLink = "<a href=\"tel:" + checkOutNumber + "\">Check-Out</a>";
      var selectbox = "<input type='checkbox' name='selected' value=" + assignment.id + ">"
      // var listItem = "<tr><td>" + assignment.toString() + "</td><td>" + checkInLink + "</td><td>" + checkOutLink + "</td></tr>";
      var listItem = "<tr><td>" + assignment.toString() + "</td><td>" + selectbox + "</td></tr>";

      return listItem;
    },
    filterMatches: function() {
      var filterParts = this.filter.split(" ");
      var text = assignment.toString().toLowerCase();
      var filterIndex;
      var filterPart;

      for (filterIndex in filterParts) {
        filterPart = filterParts[filterIndex];

        if (text.includes(filterPart) === false) {
          return false;
        }
      }

      return true;
    }
  }
}
