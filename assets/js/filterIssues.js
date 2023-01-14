// get the form
let filterIssueForm = document.getElementById('filter-issue-form');
// get the details of the issues of the project in json
let issuesJson = document.getElementById('issue-data').getAttribute('data');
// parse the data
let issues = JSON.parse(issuesJson);
// get element where filtered issues will be shown
let issueList = document.getElementById('issues-container');

filterIssueForm.addEventListener('submit', function (e) {
  e.preventDefault();

  //create empty array where result will be stored
  let filteredIssues = [];

  //get all the form data
  let labelsList = filterIssueForm.querySelectorAll('input[type=checkbox]');
  let labelsElements = [...labelsList].filter((Element) => Element.checked);

  let authorVal = filterIssueForm.querySelector(
    'input[type=radio][name=author]:checked'
  ).value;

  let [...labelsArr] = labelsElements.map((Element) => Element.value);

  //add issue to filtered issues array
  issues.map((el) => {
    if (el.author == authorVal) {
      if (!filteredIssues.includes(el)) {
        filteredIssues.push(el);
      }
    }
    labelsArr.map((label) => {
      if (el.labels.includes(label)) {
        if (!filteredIssues.includes(el)) {
          filteredIssues.push(el);
        }
      }
    });
  });
  //create a div and add details of the filtered issues
  issueList.innerHTML = '';
  for (let issue of filteredIssues) {
    let Div = document.createElement('div');
    Div.style = 'none';
    Div.innerHTML = `
      <div class="card w-100 mb-1 ${
        issue.open == false ? ' text-bg-danger' : 'text-bg-success'
      } " >
    <div class="card-body" >
      <span class="d-flex justify-content-between">
        <h4 class="card-title">Title : ${issue.title} ${
      issue.open == false ? '( Open )' : '( Closed )'
    }  </h4>
        <a style="text-decoration: none; color:white" href="/project/delete/${
          issue._id
        }">X</a>
      </span>
      
      <h5 class="card-title">Author : ${issue.author}</h5>
      <h6 class="card-subtitle mb-2 ">
        Description : ${issue.description}
      </h6>
    
    </div>
  </div>
  `;
    issueList.appendChild(Div);
  }
});
