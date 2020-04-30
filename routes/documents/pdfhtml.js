module.exports = ({  
schoolCode,
admissionNo,
TCNo,
nameOfTheStudent,
motherName,
fatherName,
dateOfBirth,
lastSchoolAttended,
gender,
nationality,
category,
placeOfBirth,
dateOfAdmission,
classLastStudied,
subjectStudied,
lastExamResult,
whetherQualified,
promotedClass,
monthFees,
feesConcession,
workingDays,
presentDays,
scouts,
gamesPlayed,
generalConduct,
dateStruck,
dateOfIssue,
reason,
udiseNo,
address,
remarks
}) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Transfer Cerficate</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="../client/doonlogo.png"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Date: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                   </table>
                      <table>
                         <tr>
                            <td>School Code:</td>
                            <td>${schoolCode}</td>
                            </tr>
                            <tr>
                            <td>Admission No:</td>
                            <td>${admissionNo}</td>
                            </tr>
                            <tr>
                            <td>TC No:</td>
                            <td>${TCNo}</td>
                            </tr>
                            <tr>
                            <td>Name of the Student:</td>
                            <td> ${nameOfTheStudent}</td>
                            </tr>
                            <tr>
                             <td>Mother Name:</td>
                             <td> ${motherName}</td>
                            </tr>
                            <tr>
                            <td>Father Name:</td>
                            <td>${fatherName}</td>
                            </tr>
                            <tr>
                            <td>Date Of Birth:</td>
                            <td>${dateOfBirth}</td>
                            </tr>
                            <tr>
                            <td>Last School Attended:</td>
                            <td>${lastSchoolAttended}</td>
                            </tr>
                            <tr>
                            <td>Gender:</td>
                            <td>${gender}</td>
                            </tr>
                            <tr>
                            <td>Nationality:</td>
                            <td>${nationality}<td>
                            </tr>
                            <tr>
                            <td>Category:</td>
                            <td>${category}</td>
                            </tr>
                            <tr>
                            <td>Place of Birth:</td>
                            <td>${placeOfBirth}</td>
                            </tr>
                            <tr>
                            <td>Date Of Admission:</td>
                            <td>${dateOfAdmission}</td>
                            </tr>
                            <tr>
                            <td>Class Last Studied:</td>
                            <td>${classLastStudied}</td>
                            </tr>
                            <tr>
                            <td>Subjects studied:</td>
                            <td>${subjectStudied}</td>
                            </tr>
                            <tr>
                            <td>Last Exam Result:</td>
                            <td>${lastExamResult}</td>
                            </tr>
                            <tr>
                            <td>Whether Qualified:</td>
                            <td>${whetherQualified}</td>
                            </tr>
                            <tr>
                            <td>Promoted to class:</td>
                            <td>${promotedClass}</td>
                            </tr>
                            <tr>
                            <td>Monthly Fees:</td>
                            <td>${monthFees}</td>
                            </tr>
                            <tr>
                            <td>Fees Concession:</td>
                            <td>${feesConcession}</td>
                            </tr>
                            <tr>
                            <td>Working Days:</td>
                            <td>${workingDays}</td>
                            </tr>
                            <tr>
                            <td>Present Days:</td>
                            <td>${presentDays}</td>
                            </tr>
                            <tr>
                            <td>Scouts:</td>
                            <td>${scouts}</td>
                            </tr>
                            <tr>
                            <td>Games Played:</td>
                            <td>${gamesPlayed}</td>
                            </tr>
                            <tr>
                            <td>General Conduct:</td>
                            <td>${generalConduct}</td>
                            </tr>
                            <tr>
                            <td>Date Struck:</td>
                            <td>${dateStruck}</td>
                            </tr>
                            <tr>
                            <td>Date Of Issue:</td>
                            <td>${dateOfIssue}</td>
                            </tr>
                            <tr>
                            <td>Reason foe leaving:</td>
                            <td>${reason}</td>
                            </tr>
                            <tr>
                            <td>Udise No:</td>
                            <td>${udiseNo}</td>
                            </tr>
                            <tr>
                            <td>Address:</td>
                            <td>${address}</td>
                            </tr>
                            <tr>
                            <td>Remarks:</td>
                            <td>${remarks}</td>
                            </tr>
                         
                      
             </table>
            
          </div>
       </body>
    </html>
    `;
};
