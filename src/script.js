// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById("myModal-opacity");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openKhataList() {
  modal.style.display = "block";
  document.getElementById("modalBottomTag").innerHTML = `
        <div id="khataListMain"></div>
        <div class="newKhataAdd">
          <div class="flex center" id="khataForm"></div>
          <div class="flex center" id="khataFormBtn" style="margin-top: 12px">
            <button class="normalBtn pinkDiv" onclick="openKhataInput()">
              <i class="fa fa-plus-circle"></i> Add New Khata
            </button>
          </div>
        </div>`;
  loadKhataList();
}

function openUserProfile() {
  const userData = JSON.parse(localStorage.getItem("khatabook_user"));

  modal.style.display = "block";
  document.getElementById("modalBottomTag").innerHTML = `
        <div class="flex center">
          <i class="fa fa-user-circle userIconMax"></i>
        </div>

        <div class="flex center">
          <label class="userName"> ${userData.user_name} </label>
        </div>

        <div class="userTitle" style="text-align: center; margin-top: 50px;"> Apps Data ! </div>
        <div class="flex center" style="margin-bottom: 20px">
          <label> App's All Data are Local Database, <br />Do Not Clear App, Delete all Data. </label>
        </div>`;
}

//.................................................
var homePage = `<div class="headerTopFixed flex between">
            <div onclick="openKhataList()">
              <i class="fa fa-book iconLogo"></i>
              <label class="headerTitleName" id="viewKhataListName"> Khata Name </label>
            </div>

            <div class="headerIcon" onclick="openUserProfile()">
              <i class="fa fa-user-circle"></i>
            </div>


          </div>

          <div class="headerDashBoard">
            <div class="flex dashBoardContent">
              <div>
                <label class="dashBoardTxt"> You will give (Cr) </label> <br />
                <label class="dashBoardNum redText" id="totalGive">
                  <i class="fa fa-rupee"></i> 0
                </label>
              </div>
              <div>
                <label class="dashBoardTxt"> You will get (Dr) </label> <br />
                <label class="dashBoardNum greenText" id="totalGote">
                  <i class="fa fa-rupee"></i> 0
                </label>
              </div>
              <div>
                <label class="dashBoardTxt"> Balance </label> <br />
                <label class="dashBoardNum" id="balance">
                  <i class="fa fa-rupee"></i> 0
                </label>
              </div>
            </div>
          </div>

          <div class="rediusCenter">*****</div>

          <div class="topDownDIV" style="top: 135px">
            <div class="topDownItems flex between">
              <div>
                <input class="input-search" type="search" placeholder="&#128269;   Search ..." id="searchInput"
                  autocomplete="off" maxlength="15" onkeyup="displayPartyList()" onsearch="displayPartyList()" />
              </div>
              <a href="#openCashBook">
                <button class="normalBtnMin pinkDiv"> CashBook </button>
              </a>
            </div>
          </div>

          <div class="partyListBody" id="viewDataList"></div>

          <a href="#addNewParty">
          <div class="bottomRightFixedBtn">
            <i class="fa fa-plus"></i> <label> Add New Party </label>
          </div> </a>`;

var partyDetailsTag = `<div class="headerTopFixed flex between">
              <div>
                  <i class="fa fa-arrow-circle-left arrow-left" onclick="history.back()"></i>
                  <label class="headerTitleName" id="setPartyName"> Party Name</label>
              </div>
              </div>

              <div class="headerDashBoard">
                <div class="flex dashBoardContent">
                  <div>
                    <label class="dashBoardTxt" id="setGiveText"> You will give (Cr) </label> <br />
                    <label class="dashBoardNum redText" id="totalPartyGive">
                      <i class="fa fa-rupee"></i> 0
                    </label>
                  </div>
                  <div>
                    <label class="dashBoardTxt" id="setGoteText"> You will get (Dr) </label> <br />
                    <label class="dashBoardNum greenText" id="totalPartyGote">
                      <i class="fa fa-rupee"></i> 0
                    </label>
                  </div>
                  <div>
                    <label class="dashBoardTxt"> Balance </label> <br />
                    <label class="dashBoardNum" id="partyBalance">
                      <i class="fa fa-rupee"></i> 0
                    </label>
                  </div>
                </div>
              </div>

              <div class="rediusCenter">*****</div>

              <div class="partyListBody" id="viewRecords"></div>

              <div class="bottomDIV flex" id="In_OutBtn"></div>`;

var addNewParty = `<div class="headerTopFixed flex between">
                <div>
                  <i class="fa fa-arrow-circle-left arrow-left" onclick="history.back()"></i>
                  <label class="headerTitleName" id="editPartyHead">Party Details Form</label>
                </div>

              </div>

              <div class="formBody">
                <div class="input-container">
                  <i class="fa fa-user"></i>
                  <input
                    class="input-field"
                    type="text"
                    placeholder="Full Name"
                    id="fullName"
                    autocomplete="off"
                    maxlength="20"
                  />
                </div>

                <div class="input-container">
                  <i class="fa fa-mobile"></i>
                  <input
                    class="input-field"
                    type="number"
                    placeholder="Mobile Number"
                    id="mobile"
                    autocomplete="off"
                    onKeyPress="if(this.value.length==10) return false;"
                  />
                </div>

                <div class="input-container">
                  <i class="fa fa-map-marker"></i>
                  <input
                    class="input-field"
                    type="text"
                    placeholder="Address"
                    id="address"
                    autocomplete="off"
                    maxlength="50"
                  />
                </div>
                <div id="save_updateParty">
                  <button type="submit" class="saveBtn pinkDiv" onclick="addUpdateParty()"> Add Party </button>
                </div>
              </div>

              <div id="addPartyMsg" class="formAlertMsg"></div>`;

var addTransactionTag = `<div class="headerTopFixed flex between">
                <div>
                  <i class="fa fa-arrow-circle-left arrow-left" onclick="history.back()"></i>
                  <label class="headerTitleName" id="transactionType">Add Amount</label>
                </div>
              </div>

              <div class="topDownDIV" style="top: 75px"></div>

              <input type="hidden" id="input_recordType" />

              <div class="formBody" style="margin-top: 40px">
                <div class="input-container">
                  <i class="fa fa-rupee"></i>
                  <input
                    class="input-field"
                    type="number"
                    placeholder="Enter Amount"
                    id="setAmount"
                    autocomplete="off"
                    onKeyPress="if(this.value.length==6) return false;"
                  />
                </div>

                <div class="input-container">
                  <i class="fa fa-calendar"></i>
                  <input
                    class="input-field"
                    type="date"
                    placeholder="Date"
                    id="setDate"
                  />
                </div>

                <div class="input-container">
                  <i class="fa fa-sticky-note"></i>
                  <input
                    class="input-field"
                    type="text"
                    placeholder="Details"
                    id="setDetails"
                    autocomplete="off"
                    maxlength="45"
                  />
                </div>
                <div id="giveGotBtn"></div>
              </div>

              <div id="editAmountMsg" class="formAlertMsg"></div>

              <div class="topDownDIV" style="top: 75px">
                <div class="topDownItems flex between flex" id="deleteBtn">
              </div>
            </div>
            </div>`;

if (!localStorage.getItem("khatabook_user")) {
  const user_id = generateID();
  const userSet = {
    user_id: user_id,
    user_name: "guest",
  };
  localStorage.setItem("khatabook_user", JSON.stringify(userSet));

  // Add Defalt Khata
  let khataData = JSON.parse(localStorage.getItem("khatabook_khata")) || [];

  const khata_id = generateID();
  const newKhata = {
    khata_id: khata_id,
    user_id: user_id,
    khata_name: "My Account",
    sync: "Offline",
  };
  khataData.push(newKhata);
  // Save updated data back to localStorage
  localStorage.setItem("khatabook_khata", JSON.stringify(khataData));

  // set Khata Id Defalt
  const khataSet = {
    khata_id: khata_id,
    khata_name: "My Khata",
  };
  localStorage.setItem("record_khata", JSON.stringify(khataSet));
}

function getUrl() {
  const htmlTag = document.getElementById("mainBodyTag");
  const url = window.location.href; // Get the full URL

  var section = url.split("#")[1];

  if (section === "addNewParty") {
    // Add New Party HTML Tags
    newTag = addNewParty;
    // ---
  } else if (section === "partyDetails") {
    // get Party Details HTML Tags
    newTag = partyDetailsTag;

    setTimeout(partyDetails, 10);
    // ---
  } else if (section === "editPartyDetails") {
    // Edit Party Details
    newTag = addNewParty;

    setTimeout(editParty, 10);
    // ---
  } else if (section === "addGiveAmount") {
    // add Give Amount
    newTag = addTransactionTag;

    localStorage.removeItem("record_transaction");

    setTimeout(function () {
      document.getElementById("input_recordType").value = "Out";
    }, 20);

    setTimeout(openTransaction, 30);
    // ---
  } else if (section === "addGotAmount") {
    // add Got Amount
    newTag = addTransactionTag;

    localStorage.removeItem("record_transaction");

    setTimeout(function () {
      document.getElementById("input_recordType").value = "In";
    }, 20);

    setTimeout(openTransaction, 30);
    // ---
  } else if (section === "editAmount") {
    // Edit Transaction Amount
    newTag = addTransactionTag;

    setTimeout(openTransaction, 10);
    // ---
  } else if (section === "openCashBook") {
    // Open Cash Book
    newTag = partyDetailsTag;

    setTimeout(cashBookTags, 10);
    // ---
  } else if (section === "addOutAmount") {
    // Add Cash Book Out Amount
    newTag = addTransactionTag;
    localStorage.removeItem("record_cId");

    setTimeout(function () {
      document.getElementById("input_recordType").value = "Out";
    }, 20);

    setTimeout(addCashTags, 30);
    // ---
  } else if (section === "addInAmount") {
    // Add Cash Book In Amount
    newTag = addTransactionTag;
    localStorage.removeItem("record_cId");

    setTimeout(function () {
      document.getElementById("input_recordType").value = "In";
    }, 20);

    setTimeout(addCashTags, 30);
    // ---
  } else if (section === "editCashAmount") {
    // Edit Cash Book Transaction Amount
    newTag = addTransactionTag;

    setTimeout(addCashTags, 30);
    // ---
  } else {
    // set Defailt Home page
    newTag = homePage;

    setTimeout(displayPartyList, 100);
    // ---
  }
  htmlTag.innerHTML = newTag;
} // popstate इवेंट को सुनें
window.addEventListener("popstate", getUrl);

// Function to redirect after 2 seconds
function redirectToURL() {
  var currentUrl = window.location.href;
  if (currentUrl.includes("#")) {
    window.location.href = currentUrl;
  } else {
    window.location.href = currentUrl + "#homePage";
  } // set Titlebar Pink Color
  document.getElementById("themeColor").setAttribute("content", "#ff69b4");
}
setTimeout(redirectToURL, 2000);

// Open New Khata Tag
function openKhataInput() {
  document.getElementById("khataFormBtn").innerHTML = `
        <button type="submit" class="normalBtn pinkDiv" onclick="add_update_Khata()"> Save New Khata </button>`;

  document.getElementById("khataForm").innerHTML = `
        <input class="input-newKhata" type="text" placeholder="New Khata" id="khata_name"
          autocomplete="off" onKeyPress="if(this.value.length==21) return false;" />
          <button class="ButtonMinAdd redDiv" onclick="closeKhataInput()">
          <i class="fa fa-close"></i>
        </button>`;
}

function closeKhataInput() {
  document.getElementById("khataFormBtn").innerHTML = `
        <button class="normalBtn pinkDiv" onclick="openKhataInput()">
          <i class="fa fa-plus-circle"></i> Add New Khata
        </button>`;
  document.getElementById("khataForm").innerHTML = "";
}

function add_update_Khata(khata_id) {
  const userData = JSON.parse(localStorage.getItem("khatabook_user"));
  var user_id = userData.user_id;

  const khata_name = document.getElementById("khata_name").value;

  // Get existing data from localStorage
  let khataData = JSON.parse(localStorage.getItem("khatabook_khata")) || [];

  if (user_id.length === 0 || khata_name.length === 0) {
    alert("Enter Khata name");
  } else {
    if (khata_id) {
      // Update existing user data
      const index = khataData.findIndex((khata) => khata.khata_id === khata_id);
      khataData[index] = {
        khata_id: khata_id,
        user_id: user_id,
        khata_name: khata_name,
        sync: "Offline",
      };
    } else {
      // Add new user data
      if (!khata_id) {
        var khata_id = generateID();
      }
      const newUser = {
        khata_id: khata_id,
        user_id: user_id,
        khata_name: khata_name,
        sync: "Offline",
      };
      khataData.push(newUser);
    }
    closeKhataInput();
    setTimeout(loadKhataList, 20);
    // Save updated data back to localStorage
    localStorage.setItem("khatabook_khata", JSON.stringify(khataData));
  }
}

// Load Khata List at Main
function loadKhataList() {
  const khataData = JSON.parse(localStorage.getItem("record_khata"));
  var khata_id = khataData.khata_id;

  var getRecords = "";

  const khataList = JSON.parse(localStorage.getItem("khatabook_khata")) || [];

  if (khataList.length === 0) {
    getRecords = "Empty Khata List";
  } else {
    khataList.forEach((item, index) => {
      if (khata_id === item.khata_id) {
        var listIcon = '<i class="fa fa-check-square-o"></i>';
      } else {
        var listIcon = '<i class="fa fa-square-o"></i>';
      }
      getRecords += `<div class="khataListMain flex between">
              <label onclick="setKhataId_Name('${item.khata_id}', '${item.khata_name}')"> ${listIcon} ${item.khata_name} </label>
              <button class="ButtonMin pinkDiv" onclick="editKhataInput('${item.khata_id}', '${item.khata_name}')"> Edit </button>
              </div>`;
    });
  }
  document.getElementById("khataListMain").innerHTML = getRecords;
} // ......

// Load Khata List at Option
function setKhataId_Name(khata_id, khata_name) {
  const record = {
    khata_id: khata_id,
    khata_name: khata_name,
  };
  localStorage.setItem("record_khata", JSON.stringify(record));
  setTimeout(displayPartyList, 20);
  modal.style.display = "none";
  closeKhataInput();
}

// Open Edit Khata Tag
function editKhataInput(khata_id, khata_name) {
  document.getElementById("khataFormBtn").innerHTML = `
        <button type="submit" class="normalBtn pinkDiv" onclick="add_update_Khata('${khata_id}')"> Update Khata </button>`;

  document.getElementById("khataForm").innerHTML = `
        <input class="input-newKhata" type="text" placeholder="New Khata" id="khata_name"
          autocomplete="off" onKeyPress="if(this.value.length==21) return false;" value="${khata_name}" />
          <button class="ButtonMinAdd redDiv" onclick="closeKhataInput()">
          <i class="fa fa-close"></i>
        </button>`;
}

// Load Party List
function displayPartyList() {
  var getPartyData = "";

  const khataData = JSON.parse(localStorage.getItem("record_khata"));
  var khata_name = khataData.khata_name;
  var khata_id = khataData.khata_id;

  document.getElementById("viewKhataListName").innerHTML =
    khata_name +
    ' <i class="fa fa-caret-down" style="margin-left: 8px; font-size: 16px"></i>';

  const query = document.getElementById("searchInput").value.toLowerCase();

  const data = JSON.parse(localStorage.getItem("khatabook_party")) || []; // This Data for Party List

  // Filter records by the provided name
  const matchedRecords = data.filter((record) => record.khata_id === khata_id);

  // Sort the Array
  const partyListData = matchedRecords.toSorted().reverse();

  const dataRecord =
    JSON.parse(localStorage.getItem("khatabook_transaction")) || []; // This Data for Transaction Records

  const filteredParty = partyListData.filter((record) =>
    record.party_name.toLowerCase().includes(query)
  );

  if (filteredParty.length === 0) {
    getPartyData = `<a href="#addNewParty"> <div style="text-align: center"> <i class="fa fa-vcard iconPng-bg"></i> <div>
              <div class="emptyListMsg"> Add party then manage</div> </a>`;
  } else {
    filteredParty.forEach((item, index) => {
      totalGive = 0;
      totalGote = 0;
      dataRecord.forEach((getItem, index) => {
        if (getItem.party_id === item.party_id) {
          if (getItem.tr_type === "In") {
            totalGote += +getItem.amount;
          } else {
            totalGive += +getItem.amount;
          }
        }
      });
      const partyBalance = totalGive - totalGote;
      if (partyBalance < 0) {
        var amountTextColor = "redText";
        var balanceAmount = Math.abs(partyBalance);
      } else {
        var amountTextColor = "greenText";
        var balanceAmount = partyBalance;
      }
      getPartyData += `<a href="#partyDetails">
            <div class="partyList flex" onclick="partyDetails('${item.party_id}')">
              <div class="flex">
                <div class="partyCircle"></div>
                  <div>
                    <label class="partyName"> ${item.party_name}</label> <br />
                    <label class="agoText">+91 ${item.mobile_no}</label>
                  </div>
                </div>
                <div class="flex">
                  <div class="partyDetailNum ${amountTextColor}"><i class="fa fa-rupee"></i> ${balanceAmount}</div>
                  <i class="fa fa-ellipsis-v listIcon"></i>
                </div>
              </div> </a>`;
    });
  }
  document.getElementById("viewDataList").innerHTML = getPartyData;

  // Total Count Give, Gote and Balance Amount
  totalGive = 0;
  totalGote = 0;

  // Filter records by the provided name
  const matchedAmount = dataRecord.filter(
    (record) => record.khata_id === khata_id
  );

  matchedAmount.forEach((item, index) => {
    if (item.tr_type === "In") {
      totalGote += +item.amount;
    } else {
      totalGive += +item.amount;
    }
  });
  const balance = totalGive - totalGote;
  document.getElementById("totalGive").innerHTML =
    '<i class="fa fa-rupee"></i> ' + totalGive;
  document.getElementById("totalGote").innerHTML =
    '<i class="fa fa-rupee"></i> ' + totalGote;
  document.getElementById("balance").innerHTML =
    '<i class="fa fa-rupee"></i> ' + balance;
} // End code Display Party

// Add and Update Party to Database
function addUpdateParty(party_id) {
  const khataData = JSON.parse(localStorage.getItem("record_khata"));
  var khata_id = khataData.khata_id;

  const userData = JSON.parse(localStorage.getItem("khatabook_user"));
  var user_id = userData.user_id;

  const party_name = document.getElementById("fullName").value;
  const mobile_no = document.getElementById("mobile").value;
  const address = document.getElementById("address").value;

  // Get existing data from localStorage
  let partyData = JSON.parse(localStorage.getItem("khatabook_party")) || [];

  if (
    khata_id.length === 0 ||
    party_name.length === 0 ||
    mobile_no.length === 0 ||
    address.length === 0
  ) {
    document.getElementById("addPartyMsg").innerHTML =
      "Please Fill All Details!";
  } else {
    if (party_id) {
      // Update existing user data
      const index = partyData.findIndex((user) => user.party_id === party_id);
      partyData[index] = {
        party_id: party_id,
        user_id: user_id,
        khata_id: khata_id,
        party_name: party_name,
        mobile_no: mobile_no,
        address: address,
        sync: "Offline",
      };

      let msgCode_HTML = `<i class="fa fa-check greenText"></i> <label> Updated ! </label> <p> Successfully party details updated. </p>`;
      openMsg(msgCode_HTML);
    } else {
      // Add new user data
      if (!party_id) {
        var party_id = generateID();
      }
      const newUser = {
        party_id: party_id,
        user_id: user_id,
        khata_id: khata_id,
        party_name: party_name,
        mobile_no: mobile_no,
        address: address,
        sync: "Offline",
      };
      partyData.push(newUser);

      let msgCode_HTML = `<i class="fa fa-check greenText"></i> <label> Party Added ! </label> <p> Successfully party added. </p>`;
      openMsg(msgCode_HTML);
    }
    // Save updated data back to localStorage
    localStorage.setItem("khatabook_party", JSON.stringify(partyData));

    history.back();
  }
}

// Genrate Uniqe Id
function generateID() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < 9; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  let Id = id;
  return Id;
}

// Open party details modal
function partyDetails(party_id) {
  if (!party_id) {
    var party_id = localStorage.getItem("record_partyId");
  }
  const partyData = JSON.parse(localStorage.getItem("khatabook_party"));
  const record = partyData.find((p) => p.party_id === party_id);
  localStorage.setItem("record_partyId", record.party_id); // set Pary Id to Local Storage
  setTimeout(displayRecords, 90);
}

function cashBookTags() {
  document.getElementById("setPartyName").innerHTML = `
        <label class="headerTitleName"> Cash Book </label>`;
  document.getElementById("setGiveText").innerHTML = "Total Out";
  document.getElementById("setGoteText").innerHTML = "Total In";

  document.getElementById("In_OutBtn").innerHTML = `<a href="#addOutAmount">
                <button class="normalBtn redDiv"> <i class="fa fa-minus-circle"></i> Out </button>
              </a>
              <a href="#addInAmount">
                <button class="normalBtn greenDiv"> <i class="fa fa-plus-circle"></i> In </button>
              </a>`;

  setTimeout(loadCashRecords, 50);
}

// Load Amount Records with Pary wise
function loadCashRecords() {
  const data = JSON.parse(localStorage.getItem("addCashRecord")) || [];

  // Sort the Array
  const cashData = data.toSorted().reverse();

  var getRecords = `
        <div class="topDownDIV" style="top: 135px">
               <div class="topDownItems flex between">
                <div style="text-align: center"> CashBook Record By </div>
                <div style="text-align: center">
                  <button class="ButtonMin pinkDiv"> Todays </button>
                  <button class="ButtonMin greenDiv"> All Record </button>
                </div>
               </div>
        </div>`;

  totalGive = 0;
  totalGote = 0;
  if (cashData.length === 0) {
    getRecords = `<div style="text-align: center"> <i class="fa fa-rupee iconPng-bg"></i> </div>
            <div class="emptyListMsg"> Empty Daily Cash </div>`;
  } else {
    cashData.forEach((item, index) => {
      const strDate = item.date.split("-").reverse().join("-");
      if (item.tr_type === "In") {
        totalGote += +item.amount;
        var amountValue = `<div class="partyDetailNum redText"></div>
                  <div class="partyDetailNum greenText"><i class="fa fa-rupee"></i> ${item.amount}</div>
                  <i class="fa fa-ellipsis-v listIcon"></i>`;
      } else {
        totalGive += +item.amount;
        var amountValue = `<div class="partyDetailNum redText"><i class="fa fa-rupee"></i> ${item.amount}</div>
                  <div class="partyDetailNum greenText"></div>
                  <i class="fa fa-ellipsis-v listIcon"></i>`;
      }

      getRecords += `<a href="#editCashAmount">
              <div class="partyList flex" onclick="editCashAmount('${item.cId}')">
                <div class="flex">
                  <div style="display: flex; align-items: left; flex-direction: column;">
                    <label class="amountDetails">${item.details}</label>
                    <label class="dateTime"> ${strDate} | ${item.time} </label>
                  </div>
                </div>
                <div class="flex"> ${amountValue} </div>
              </div> </a>`;
    });
  }
  const partyBalance = totalGive - totalGote;
  document.getElementById("viewRecords").innerHTML = getRecords;
  document.getElementById("totalPartyGive").innerHTML =
    '<i class="fa fa-rupee"></i> ' + totalGive;
  document.getElementById("totalPartyGote").innerHTML =
    '<i class="fa fa-rupee"></i> ' + totalGote;
  document.getElementById("partyBalance").innerHTML =
    '<i class="fa fa-rupee"></i> ' + partyBalance;
} // Display data on page load

function addCashTags() {
  const cId = localStorage.getItem("record_cId");

  if (cId) {
    const recordData = JSON.parse(localStorage.getItem("addCashRecord"));
    const record = recordData.find((p) => p.cId === cId);

    document.getElementById("input_recordType").value = record.tr_type;
    document.getElementById("setDate").value = record.date;
    document.getElementById("setAmount").value = record.amount;
    document.getElementById("setDetails").value = record.details;

    if (record.tr_type === "Out") {
      var amountType = "Out";
    } else {
      var amountType = "In";
    }
    var transactionType = `<label class="headerTitleName"> Edit ${amountType} Amount </label>`;

    document.getElementById(
      "deleteBtn"
    ).innerHTML = `<div class="deleteHint"> Do you want to delete this transaction record? If yes, press the delete button. </div>
              <button class="normalBtnMin redDiv" onclick="cashBookTransaction_Delete('${cId}')"> <i class="fa fa-archive"></i> Delete </button>`;

    var amountSaveBtn = `<button class="saveBtn pinkDiv" onclick="addCashTransaction('${cId}')"> Update </button>`;
  } else {
    var recordType = document.getElementById("input_recordType").value;
    if (recordType === "Out") {
      var amountType = "Out";
    } else {
      var amountType = "In";
    }
    var transactionType = `<label class="headerTitleName"> ${amountType} Amount </label>`;
    var amountSaveBtn = `<button class="saveBtn pinkDiv" onclick="addCashTransaction()"> Save </button>`;
  }
  document.getElementById("transactionType").innerHTML = transactionType;
  document.getElementById("giveGotBtn").innerHTML = amountSaveBtn;
}

function editCashAmount(cId) {
  if (!cId) {
    var cId = localStorage.getItem("record_cId");
  }
  const recordData = JSON.parse(localStorage.getItem("addCashRecord"));
  const record = recordData.find((p) => p.cId === cId);
  localStorage.setItem("record_cId", record.cId);
}

// Add and Update Party to Database
function addCashTransaction(cId) {
  var time = new Date().getHours() + ":" + new Date().getMinutes();
  const date = document.getElementById("setDate").value;
  const recordType = document.getElementById("input_recordType").value;
  const amount = document.getElementById("setAmount").value;
  const details = document.getElementById("setDetails").value;

  // Get existing data from localStorage
  let cashData = JSON.parse(localStorage.getItem("addCashRecord")) || [];

  if (amount.length === 0 || date.length === 0) {
    document.getElementById("editAmountMsg").innerHTML =
      "Please Fill Amount & Date!";
  } else {
    if (cId) {
      // Update existing user data
      const index = cashData.findIndex((user) => user.cId === cId);
      cashData[index] = {
        cId: cId,
        date: date,
        time: time,
        recordType: recordType,
        amount: amount,
        details: details,
      };

      let msgCode_HTML = `<i class="fa fa-check greenText"></i> <label> Updated ! </label> <p> Successfully cash amount  updated. </p>`;
      openMsg(msgCode_HTML);
    } else {
      // Add new user data
      if (!cId) {
        var cId = generateID();
      }
      const newCash = {
        cId: cId,
        date: date,
        time: time,
        recordType: recordType,
        amount: amount,
        details: details,
      };
      cashData.push(newCash);

      let msgCode_HTML = `<i class="fa fa-check greenText"></i> <label> Recorded ! </label> <p> Successfully cash amount added. </p>`;
      openMsg(msgCode_HTML);
    }
    // Save updated data back to localStorage
    localStorage.setItem("addCashRecord", JSON.stringify(cashData));

    history.back();
  }
}

// Open popup Message modal
function openMsg(msgCode) {
  document.getElementById("themeColor").setAttribute("content", "#f8c8dc");
  document.getElementById("popupMsgModal").style.display = "block";
  document.getElementById("msgCode_HTML").innerHTML = msgCode;
  setTimeout(closeMsg, 3000);
} // Close add party modal

function closeMsg() {
  document.getElementById("themeColor").setAttribute("content", "#ff69b4");
  document.getElementById("popupMsgModal").style.display = "none";
}

function partyTransaction_Delete(id) {
  document.getElementById("themeColor").setAttribute("content", "#f8c8dc");

  document.getElementById("popupMsgModal").style.display = "block";
  document.getElementById(
    "msgCode_HTML"
  ).innerHTML = `<i class="fa fa-trash redText"></i>
        <label> Delete ? </label>
        <p> Do you want to delete this record. </p> <br />
        <div class="flex">
          <button class="normalBtnMin greenDiv" onclick="closeMsg()">  Cancel </button>
          <button class="normalBtnMin redDiv" onclick="deleteAmountRecord('${id}')">  Delete </button>
        </div>`;
}

function cashBookTransaction_Delete(id) {
  document.getElementById("themeColor").setAttribute("content", "#f8c8dc");

  document.getElementById("popupMsgModal").style.display = "block";
  document.getElementById(
    "msgCode_HTML"
  ).innerHTML = `<i class="fa fa-trash redText"></i>
        <label> Delete ? </label>
        <p> Do you want to delete this record. </p> <br />
        <div class="flex">
          <button class="normalBtnMin greenDiv" onclick="closeMsg()">  Cancel </button>
          <button class="normalBtnMin redDiv" onclick="deleteCashBookRecord('${id}')">  Delete </button>
        </div>`;
}

// Load Amount Records with Pary wise
function displayRecords() {
  const party_id = localStorage.getItem("record_partyId");
  document.getElementById("In_OutBtn").innerHTML = `<a href="#addGiveAmount">
                <button class="normalBtn redDiv"> <i class="fa fa-minus-circle"></i> You Give </button>
              </a>
              <a href="#addGotAmount">
                <button class="normalBtn greenDiv"> <i class="fa fa-plus-circle"></i> You Get </button>
              </a>`;

  const partyData = JSON.parse(localStorage.getItem("khatabook_party"));
  const record = partyData.find((p) => p.party_id === party_id);

  const monileNo = record.mobile_no;
  const fullName = record.party_name;
  document.getElementById(
    "setPartyName"
  ).innerHTML = `<label class="headerTitleName"> ${fullName} </label>
                  <a href="#editPartyDetails" class="editBtn"> Edit </a>`;

  const data = JSON.parse(localStorage.getItem("khatabook_transaction")) || [];

  // Sort the Array
  const recordData = data.toSorted().reverse();

  const filteredData = recordData.filter(
    (entry) => entry.party_id === party_id
  );

  var getRecords = "";
  totalGive = 0;
  totalGote = 0;
  if (filteredData.length === 0) {
    getRecords = `<div style="text-align: center"> <i class="fa fa-rupee iconPng-bg"></i> </div>
            <div class="emptyListMsg"> Empty Records</div>`;
  } else {
    filteredData.forEach((item, index) => {
      const strDate = item.date.split("-").reverse().join("-");
      if (item.tr_type === "In") {
        totalGote += +item.amount;
        var amountValue = `<div class="partyDetailNum redText"></div>
                  <div class="partyDetailNum greenText"><i class="fa fa-rupee"></i> ${item.amount}</div>
                  <i class="fa fa-ellipsis-v listIcon"></i>`;
      } else {
        totalGive += +item.amount;
        var amountValue = `<div class="partyDetailNum redText"><i class="fa fa-rupee"></i> ${item.amount}</div>
                  <div class="partyDetailNum greenText"></div>
                  <i class="fa fa-ellipsis-v listIcon"></i>`;
      }

      getRecords += `<a href="#editAmount">
              <div class="partyList flex" onclick="editTransaction('${item.tr_id}')">
                <div class="flex">
                  <div style="display: flex; align-items: left; flex-direction: column;">
                    <label class="amountDetails">${item.details}</label>
                    <label class="dateTime"> ${strDate} | ${item.time} </label>
                  </div>
                </div>
                <div class="flex"> ${amountValue} </div>
              </div> </a>`;
    });

    const smsText = `Dear Sir/Madam, Your Amount Pending are = ${
      totalGive - totalGote
    } Rs.`;
    const whatsAppText = `Dear Sir/Madam, Your Amount Pending are = ${
      totalGive - totalGote
    } Rs.`;

    getRecords += `<div class="topDownDIV" style="top: 135px">
               <div class="topDownItems flex between">
                <button class="normalBtnMin pinkDiv" onclick="whatsApp('${monileNo}','${whatsAppText}')"> <i class="fa fa-send"></i> WhatsApp </button>
                <button class="normalBtnMin pinkDiv" onclick="sendSMS('${monileNo}','${smsText}')"> <i class="fa fa-send"></i> SMS </button>
               </div>
            </div>`;
  }
  const partyBalance = totalGive - totalGote;
  document.getElementById("viewRecords").innerHTML = getRecords;
  document.getElementById("totalPartyGive").innerHTML =
    '<i class="fa fa-rupee"></i> ' + totalGive;
  document.getElementById("totalPartyGote").innerHTML =
    '<i class="fa fa-rupee"></i> ' + totalGote;
  document.getElementById("partyBalance").innerHTML =
    '<i class="fa fa-rupee"></i> ' + partyBalance;
} // Display data on page load

function editParty() {
  const party_id = localStorage.getItem("record_partyId");
  const partyData = JSON.parse(localStorage.getItem("khatabook_party"));
  const record = partyData.find((p) => p.party_id === party_id);

  const fullName = record.party_name;
  const mobile = record.mobile_no;
  const address = record.address;

  document.getElementById(
    "editPartyHead"
  ).innerHTML = `<label class="headerTitleName"> ${fullName} </label>`;

  document.getElementById("fullName").value = fullName;
  document.getElementById("mobile").value = mobile;
  document.getElementById("address").value = address;

  document.getElementById(
    "save_updateParty"
  ).innerHTML = `<button type="submit" class="saveBtn pinkDiv" onclick="addUpdateParty('${party_id}')"> Update Party </button>`;
}

function whatsApp(mobile, whatsAppText) {
  if (mobile && whatsAppText) {
    window.location.href = `https://api.whatsapp.com/send?phone=91${mobile}&text=${whatsAppText}`;
  }
}

function sendSMS(mobile, smsText) {
  if (mobile && smsText) {
    window.location.href = `sms:${mobile}?body=${encodeURIComponent(smsText)}`;
  }
}

function editTransaction(tr_id) {
  if (!tr_id) {
    var tr_id = localStorage.getItem("record_transaction");
  }
  const recordData = JSON.parse(localStorage.getItem("khatabook_transaction"));
  const record = recordData.find((p) => p.tr_id === tr_id);
  localStorage.setItem("record_transaction", record.tr_id);
}

function openTransaction() {
  const tr_id = localStorage.getItem("record_transaction");

  if (tr_id) {
    const recordData = JSON.parse(
      localStorage.getItem("khatabook_transaction")
    );
    const record = recordData.find((p) => p.tr_id === tr_id);

    document.getElementById("input_recordType").value = record.tr_type;
    document.getElementById("setDate").value = record.date;
    document.getElementById("setAmount").value = record.amount;
    document.getElementById("setDetails").value = record.details;

    if (record.tr_type === "Out") {
      var amountType = "Give";
    } else {
      var amountType = "Get";
    }
    var transactionType = `<label class="headerTitleName"> Edit ${amountType} Amount </label>`;

    document.getElementById(
      "deleteBtn"
    ).innerHTML = `<div class="deleteHint"> Do you want to delete this transaction record? If yes, press the delete button. </div>
              <button class="normalBtnMin redDiv" onclick="partyTransaction_Delete('${tr_id}')"> <i class="fa fa-archive"></i> Delete </button>`;

    var amountSaveBtn = `<button class="saveBtn pinkDiv" onclick="addTransaction('${tr_id}')"> Update </button>`;
  } else {
    var recordType = document.getElementById("input_recordType").value;
    if (recordType === "Out") {
      var amountType = "Give";
    } else {
      var amountType = "Get";
    }
    var transactionType = `<label class="headerTitleName"> ${amountType} Amount </label>`;
    var amountSaveBtn = `<button class="saveBtn pinkDiv" onclick="addTransaction()"> Save </button>`;
  }
  document.getElementById("transactionType").innerHTML = transactionType;
  document.getElementById("giveGotBtn").innerHTML = amountSaveBtn;
}

// Add and Update Party to Database
function addTransaction(tr_id) {
  const userData = JSON.parse(localStorage.getItem("khatabook_user"));
  var user_id = userData.user_id;

  const khataData = JSON.parse(localStorage.getItem("record_khata"));
  var khata_id = khataData.khata_id;

  const party_id = localStorage.getItem("record_partyId");
  var time = new Date().getHours() + ":" + new Date().getMinutes();
  const date = document.getElementById("setDate").value;
  const tr_type = document.getElementById("input_recordType").value;
  const amount = document.getElementById("setAmount").value;
  const details = document.getElementById("setDetails").value;

  // Get existing data from localStorage
  let traData = JSON.parse(localStorage.getItem("khatabook_transaction")) || [];

  if (amount.length === 0 || date.length === 0) {
    document.getElementById("editAmountMsg").innerHTML =
      "Please Fill Amount & Date!";
  } else {
    if (tr_id) {
      // Update existing user data
      const index = traData.findIndex((user) => user.tr_id === tr_id);
      traData[index] = {
        tr_id: tr_id,
        user_id: user_id,
        khata_id: khata_id,
        party_id: party_id,
        date: date,
        time: time,
        tr_type: tr_type,
        amount: amount,
        details: details,
      };

      let msgCode_HTML = `<i class="fa fa-check greenText"></i> <label> Updated ! </label> <p> Successfully transaction updated. </p>`;
      openMsg(msgCode_HTML);
    } else {
      // Add new user data
      const newTra = {
        tr_id: generateID(),
        user_id: user_id,
        khata_id: khata_id,
        party_id: party_id,
        date: date,
        time: time,
        tr_type: tr_type,
        amount: amount,
        details: details,
      };
      traData.push(newTra);

      let msgCode_HTML = `<i class="fa fa-check greenText"></i> <label> Recorded ! </label> <p> Successfully transaction added. </p>`;
      openMsg(msgCode_HTML);
    }
    // Save updated data back to localStorage
    localStorage.setItem("khatabook_transaction", JSON.stringify(traData));

    history.back();
  }
}

// Delete Transaction Amount Records
function deleteAmountRecord(tr_id) {
  let records = JSON.parse(localStorage.getItem("khatabook_transaction")) || [];
  // Filter out the record with the matching ID
  records = records.filter((record) => record.tr_id !== tr_id);
  // Save the updated records back to local storage
  localStorage.setItem("khatabook_transaction", JSON.stringify(records));
  localStorage.removeItem("record_transaction");
  let msgCode_HTML = `<i class="fa fa-trash redText"></i> <label> Deleted ! </label> <p> Successfully deleted. </p>`;
  openMsg(msgCode_HTML);

  history.back();
}

// Delete Cash Book Amount Records
function deleteCashBookRecord(cId) {
  let records = JSON.parse(localStorage.getItem("addCashRecord")) || [];
  // Filter out the record with the matching ID
  records = records.filter((record) => record.cId !== cId);
  // Save the updated records back to local storage
  localStorage.setItem("addCashRecord", JSON.stringify(records));
  localStorage.removeItem("record_cId");
  let msgCode_HTML = `<i class="fa fa-trash redText"></i> <label> Deleted ! </label> <p> Successfully deleted. </p>`;
  openMsg(msgCode_HTML);

  history.back();
}

// ----------
function updateOnlineStatus() {
  const statusElement = document.getElementById("status");
  if (navigator.onLine) {
    let msgCode_HTML = `<i class="fa fa-wifi greenText"></i> <label> Online </label> <p> You are online. </p>`;
    openMsg(msgCode_HTML);
    syncDataByAPI();
  } else {
    let msgCode_HTML = `<i class="fa fa-globe redText"></i> <label> Offline </label> <p> You are Offline. </p>`;
    openMsg(msgCode_HTML);
  }
}
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
// --------------
