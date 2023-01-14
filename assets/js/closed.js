class ToggleClose {
  constructor(toggleElement) {
    this.toggler = toggleElement;
    this.toggleClose();
  }

  toggleClose() {
    $(this.toggler).on('click', function (e) {
      e.preventDefault();
      let self = this;
      let obj = $(self).attr('data');
      let issue = JSON.parse(obj);
      // console.log(issue);
      $.ajax({
        type: 'PUT',
        url: '/project/closeIssue',
        data: { _id: issue._id, open: !issue.open },
        success: function (data) {
          alert(data);
          window.location.reload(true);
        },
      });
    });
  }
}
