function myfunction(){
					
					
					var filenumber = document.getElementById("File Number").value;
					var specialchar = /[!@#$%^&*()_+\-=\[\]{};':"\\| ,.<>\/?]+/;
					var specialchar1= /[!@#$%^&*()_+\=\[\]{};':"\\|<>\/?]+/;
					var character = /^[A-Za-z]+$/;
					var character1 = /^[A-Z0-9]+$/;
					var emailv = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
					
					var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
					var currentdate = new Date();
					var last2 = new Date().getFullYear().toString().slice(-2);
						if(filenumber == ""){
								
						}
						else if(filenumber.length<12 || filenumber.length>12){
							document.getElementById("e1").innerHTML =" <a href='#File Number' style='color:red'>1. File number must be 12 digits</a><br>";	
						}else if(specialchar.test(filenumber)){
							document.getElementById("e1").innerHTML =" <a href='#File Number' style='color:red'>1. Special Characters can not be allowed</a><br>";
						}
						else if(character1.test(filenumber[3])){
							document.getElementById("e1").innerHTML =" <a href='#File Number' style='color:red'>1. File number Should start with at least 4 Alphabets</a><br>";
						}else if(filenumber.slice(10,12) != last2){
							document.getElementById("e1").innerHTML =" <a href='#File Number' style='color:red'>1. File number Should End with last two digits of this year</a><br>";
						}
						else{document.getElementById("e1").innerHTML ="";}
					
					
						var applay = document.forms.querySelector('input[name="Applyingfor"]:checked');
							if(applay == null){
								document.getElementById("e1.1").innerHTML =" <a href='#1.1' style='color:red'>1.1 please fill Applying For</a><br>";	
							}else{document.getElementById("e1.1").innerHTML ="";}
						
					var reissue = document.forms.querySelector('input[name="reissue"]:checked');
					if(document.getElementById("applay13").checked){
							if(reissue == null){	
								document.getElementById("e1.2").innerHTML =" <a href='#1.2' style='color:red'>1.2 please fill If re-issue, specify reason(s)</a><br>";	
							}else{document.getElementById("e1.2").innerHTML ="";}	
						}
						
					var change = document.forms.querySelector('input[name="change"]:checked');
						if(document.getElementById("reissue5").checked){
						if(change == null){	
							document.getElementById("e1.3").innerHTML =" <a href='#1.3' style='color:red'>1.3 please fill If change in existing personal particulars, specify reason(s)</a><br>";
						}else{document.getElementById("e1.3").innerHTML ="";}
						}
					var application = document.forms.querySelector('input[name="Application"]:checked');
						if(application == null){	
							document.getElementById("e1.4").innerHTML =" <a href='#1.4' style='color:red'>1.4 please fill Type of Application</a><br>";
						}else{document.getElementById("e1.4").innerHTML ="";}
					
					var booklet = document.forms.querySelector('input[name="Passport"]:checked');
						if(booklet == null){	
							document.getElementById("e1.5").innerHTML =" <a href='#1.5' style='color:red'>1.5 please fill Type of Passport Booklet</a><br>";
						}else{document.getElementById("e1.5").innerHTML ="";}
						
					var validity = document.forms.querySelector('input[name="Validity"]:checked');
						if(validity == null){	
							document.getElementById("e1.6").innerHTML =" <a href='#1.6' style='color:red'>1.6 please fill Validity Required</a><br>";
						}else{document.getElementById("e1.6").innerHTML ="";}
					
					var Choosefile = document.getElementById("myFile").value;
						if(Choosefile == ""){
							document.getElementById("e1.6.1").innerHTML =" <a href='#myFile' style='color:red'>1.6.1 Please Choose file</a><br>";
						}
						else if(!allowedExtensions.exec(Choosefile)){
							document.getElementById("e1.6.1").innerHTML =" <a href='#myFile' style='color:red'>1.6.1 Please Choose .jpg|.jpeg|.png|.gif only</a><br>";
						}else{document.getElementById("e1.6.1").innerHTML ="";}
						
					var Choosefile1 = document.getElementById("myFile1").value;
						if(Choosefile1 == ""){
							document.getElementById("e1.6.2").innerHTML =" <a href='#myFile1' style='color:red'>1.6.2 Please Choose file</a><br>";
						}else if(!allowedExtensions.exec(Choosefile1)){
							document.getElementById("e1.6.2").innerHTML =" <a href='#myFile1' style='color:red'>1.6.2 Please Choose .jpg|.jpeg|.png|.gif only</a><br>";
						}else{document.getElementById("e1.6.2").innerHTML ="";}
						
					var name1 = document.getElementById("Name1").value;
						if(name1 == ""){
							document.getElementById("e2.1").innerHTML =" <a href='#Name1' style='color:red'>2.1 Please fill Applicant's Name</a><br>";
						}
						else if(specialchar.test(name1)){
							document.getElementById("e2.1").innerHTML =" <a href='#Name1' style='color:red'>2.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(name1)){
							document.getElementById("e2.1").innerHTML =" <a href='#Name1' style='color:red'>2.1 please fill Characters only </a><br>";
						}
						else{document.getElementById("e2.1").innerHTML ="";}
						
					var surename1 = document.getElementById("Surname1").value;
						if(surename1 == ""){
							document.getElementById("e2.1.1").innerHTML =" <a href='#Surname1' style='color:red'>2.1 Please fill Applicant's surename</a><br>";
						}
						else if(specialchar.test(surename1)){
							document.getElementById("e2.1.1").innerHTML =" <a href='#Surname1' style='color:red'>2.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(surename1)){
							document.getElementById("e2.1.1").innerHTML =" <a href='#Surname1' style='color:red'>2.1 please fill Characters only </a><br>";
						}
						else{document.getElementById("e2.1.1").innerHTML ="";}
						
					var radio22 = document.forms.querySelector('input[name="aliases"]:checked');
						if(radio22 == null){	
							document.getElementById("e2.2").innerHTML =" <a href='#2.2' style='color:red'>2.2 please Choose yes or no</a><br>";
						}else{document.getElementById("e2.2").innerHTML ="";}
						
					var radio23 = document.forms.querySelector('input[name="Supplementary"]:checked');
						if(radio23 == null){	
							document.getElementById("e2.3").innerHTML =" <a href='#2.3' style='color:red'>2.3 please Choose yes or no</a><br>";
						}else{document.getElementById("e2.3").innerHTML ="";}	
						
					var date1 = document.getElementById("Date1").value;	
					var date12345 = new Date(date1);
						if(date1 == ""){
							document.getElementById("e2.4").innerHTML =" <a href='#Date1' style='color:red'>2.4 Please Choose Date</a><br>";
						}else if(date12345 >= currentdate){
							document.getElementById("e2.4").innerHTML =" <a href='#Date1' style='color:red'>2.4 future date can not be allowed</a><br>";
						}else{document.getElementById("e2.4").innerHTML ="";}
						
					var radio231 = document.forms.querySelector('input[name="bir"]:checked');
						if(radio231 == null){	
							document.getElementById("e2.5.5").innerHTML ="<a href='#2.5' style='color:red'>2.5 please Choose yes or no</a><br>";
						}else{document.getElementById("e2.5.5").innerHTML ="";}	
						
					var place1 = document.getElementById("Place1").value;	
					if(document.getElementById("Ye").checked){
						if(place1 == ""){
							document.getElementById("e2.5").innerHTML =" <a href='#Place1' style='color:red'>2.5 Please fill Place of Birth</a><br>";
						}
						else if(specialchar.test(place1)){
							document.getElementById("e2.5").innerHTML =" <a href='#Place1' style='color:red'>2.5 Special Characters can not be allowed </a><br>";
						}else if(!character.test(place1)){
							document.getElementById("e2.5").innerHTML =" <a href='#Place1' style='color:red'>2.5 please fill Characters only </a><br>";
						}
						else{document.getElementById("e2.5").innerHTML ="";}
					}
					var district1 = document.getElementById("District1").value;	
					if(document.getElementById("Ye").checked){
						if(district1 == ""){
							document.getElementById("e2.5.1").innerHTML =" <a href='#District1' style='color:red'>2.5 Please fill District (If born in India):</a><br>";
						}
						else if(specialchar.test(district1)){
							document.getElementById("e2.5.1").innerHTML =" <a href='#District1' style='color:red'>2.5 Special Characters can not be allowed </a><br>";
						}else if(!character.test(district1)){
							document.getElementById("e2.5.1").innerHTML =" <a href='#District1' style='color:red'>2.5 please fill Characters only </a><br>";
						}
						else{document.getElementById("e2.5.1").innerHTML ="";}
					}
					
					var state1 = document.getElementById("State_UT1").value;	
					if(document.getElementById("Ye").checked){
						if(state1 == ""){
							document.getElementById("e2.5.2").innerHTML =" <a href='#State_UT1' style='color:red'>2.5 Please fill State/ UT (If born in India):</a><br>";
						}
						else if(specialchar.test(state1)){
							document.getElementById("e2.5.2").innerHTML =" <a href='#State_UT1' style='color:red'>2.5 Special Characters can not be allowed </a><br>";
						}else if(!character.test(state1)){
							document.getElementById("e2.5.2").innerHTML =" <a href='#State_UT1' style='color:red'>2.5 please fill Characters only </a><br>";
						}
						else{document.getElementById("e2.5.2").innerHTML ="";}
					}
					
					var region1 = document.getElementById("Region_Country1").value;	
					
						if(region1 == ""){
							document.getElementById("e2.5.3").innerHTML =" <a href='#Region_Country1' style='color:red'>2.5 Please fill Region/Country</a><br>";
						}
						else if(specialchar.test(region1)){
							document.getElementById("e2.5.3").innerHTML =" <a href='#Region_Country1' style='color:red'>2.5 Special Characters can not be allowed </a><br>";
						}else if(!character.test(region1)){
							document.getElementById("e2.5.3").innerHTML =" <a href='#Region_Country1' style='color:red'>2.5 please fill Characters only </a><br>";
						}else if(region1 == "india" ||region1 == "India" ||region1 == "INDIA" ){
							document.getElementById("e2.5.3").innerHTML =" <a href='#Region_Country1' style='color:red'>2.5 You can't Enter india </a><br>";
						}
						else{document.getElementById("e2.5.3").innerHTML ="";}	
						
					if(place1 == district1 || place1==state1 || place1==region1 || district1 == state1 || district1==region1 || state1==region1 ){
						document.getElementById("e2.5.4").innerHTML =" <a href='#Region_Country1' style='color:red'>2.5 value can not be same</a><br>";
					}else{document.getElementById("e2.5.4").innerHTML ="";}	
						
					var gender = document.forms.querySelector('input[name="Gender1"]:checked');
						if(gender == null){	
							document.getElementById("e2.6").innerHTML =" <a href='#2.6' style='color:red'>2.6 please choose Gender</a><br>";
						}else{document.getElementById("e2.6").innerHTML ="";}
						
					var maritial = document.forms.querySelector('input[name="Marital"]:checked');
						if(maritial == null){	
							document.getElementById("e2.7").innerHTML =" <a href='#2.7' style='color:red'>2.7 please choose Marital Status</a><br>";
						}else{document.getElementById("e2.7").innerHTML ="";}
						
					var citizen = document.forms.querySelector('input[name="Citizenship"]:checked');
						if(citizen == null){	
							document.getElementById("e2.8").innerHTML =" <a href='#2.8' style='color:red'>2.8 please choose Citizenship of India by</a><br>";
						}else{document.getElementById("e2.8").innerHTML ="";}
						
					var voterid = document.getElementById("Voter_ID").value;	
						if(voterid == ""){
							document.getElementById("e2.10").innerHTML =" <a href='#Voter_ID' style='color:red'>2.10 Please Enter Voter_ID </a><br>";
						}
						else if(specialchar.test(voterid)){
							document.getElementById("e2.10").innerHTML =" <a href='#Voter_ID' style='color:red'>2.10 Special Characters can not be allowed </a><br>";
						}else if(!character1.test(voterid)){
							document.getElementById("e2.10").innerHTML =" <a href='#Voter_ID' style='color:red'>2.10 lowercase can not be allowed </a><br>";
						}	
						else{document.getElementById("e2.10").innerHTML ="";}
						
					var type = document.forms.querySelector('input[name="Type"]:checked');
						if(type == null){	
							document.getElementById("e2.11").innerHTML =" <a href='#2.11' style='color:red'>2.11 Please Choose Employment Type </a><br>";
						}else{document.getElementById("e2.11").innerHTML ="";}
						
					var employed1 = document.getElementById("employed").value;	
					if(document.getElementById("PSU").checked){
						if(employed1 == ""){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12 Please Enter organization name </a><br>";
						}else if(employed1.length>60){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12.organization name Characters limit is 60 </a><br>";	
						}else if(specialchar.test(employed1)){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12 Special Characters can not be allowed</a><br>";
						}else{document.getElementById("e2.12").innerHTML ="";}
					}
					if(document.getElementById("Government").checked){
						if(employed1 == ""){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12 Please Enter organization name </a><br>";
						}else if(employed1.length>60){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12.organization name Characters limit is 60 </a><br>";	
						}else if(specialchar.test(employed1)){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12 Special Characters can not be allowed</a><br>";
						}else{document.getElementById("e2.12").innerHTML ="";}
					}if(document.getElementById("Statutory Body").checked){
						if(employed1 == ""){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12 Please Enter organization name </a><br>";
						}else if(employed1.length>60){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12.organization name Characters limit is 60 </a><br>";	
						}else if(specialchar.test(employed1)){
							document.getElementById("e2.12").innerHTML =" <a href='#employed' style='color:red'>2.12 Special Characters can not be allowed</a><br>";
						}else{document.getElementById("e2.12").innerHTML ="";}
					}
					
					var servant1 = document.forms.querySelector('input[name="servant"]:checked');
						if(servant1 == null){	
							document.getElementById("e2.13").innerHTML =" <a href='#2.13' style='color:red'>2.13 Please Choose yes or no </a><br>";
						}else{document.getElementById("e2.13").innerHTML ="";}
						
					var educational = document.forms.querySelector('input[name="Educational"]:checked');
						if(educational == null){	
							document.getElementById("e2.14").innerHTML =" <a href='#2.14' style='color:red'>2.14 Please Choose  Educational Qualification </a><br>";
						}else{document.getElementById("e2.14").innerHTML ="";}
						
					var category1 = document.forms.querySelector('input[name="category"]:checked');
						if(category1 == null){	
							document.getElementById("e2.15").innerHTML =" <a href='#2.15' style='color:red'>2.15 Please Choose yes or no </a><br>";
						}else{document.getElementById("e2.15").innerHTML ="";}
						
					var mark = document.getElementById("Mark").value;	
						if(mark == ""){
							document.getElementById("e2.16").innerHTML =" <a href='#Mark' style='color:red'>2.16 Please Enter  Visible Distinguishing Mark</a><br>";
						}else{document.getElementById("e2.16").innerHTML ="";}
						
					var aadhaar = document.getElementById("Aadhaar").value;	
						if(aadhaar == ""){
							document.getElementById("e2.17").innerHTML =" <a href='#Aadhaar' style='color:red'>2.17 Please Enter Aadhaar Number </a><br>";
						}else if(isNaN(aadhaar)){
							document.getElementById("e2.17").innerHTML =" <a href='#Aadhaar' style='color:red'>2.17 please Enter Number only</a><br>";
						}else if(aadhaar.length<12 || aadhaar.length>12){
							document.getElementById("e2.17").innerHTML =" <a href='#Aadhaar' style='color:red'>2.17 Aadhar number must be 12 digits</a><br>";
						}
						else{document.getElementById("e2.17").innerHTML ="";}
						
					var name2 = document.getElementById("Name2").value;	
						if(name2 == ""){
							document.getElementById("e3.1").innerHTML =" <a href='#Name2' style='color:red'>3.1 Please Enter Father's Given Name</a><br>";
						}else if(specialchar.test(name2)){
							document.getElementById("e3.1").innerHTML =" <a href='#Name2' style='color:red'>3.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(name2)){
							document.getElementById("e3.1").innerHTML =" <a href='#Name2' style='color:red'>3.1 please fill Characters only </a><br>";
						}else if(name2.length>500){
							document.getElementById("e3.1").innerHTML =" <a href='#Name2' style='color:red'>3.1.organization name Characters limit is 500 </a><br>";	
						}
						else{document.getElementById("e3.1").innerHTML ="";}
						
					var surename2 = document.getElementById("Surname2").value;	
						if(surename2 == ""){
							document.getElementById("e3.1.1").innerHTML =" <a href='#Surname2' style='color:red'>3.1 Please Enter surename</a><br>";
						}else if(specialchar.test(surename2)){
							document.getElementById("e3.1.1").innerHTML =" <a href='#Surname2' style='color:red'>3.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(surename2)){
							document.getElementById("e3.1.1").innerHTML =" <a href='#Surname2' style='color:red'>3.1 please fill Characters only </a><br>";
						}else if(surename2.length>500){
							document.getElementById("e3.1.1").innerHTML =" <a href='#Surname2' style='color:red'>3.1.organization name Characters limit is 500 </a><br>";	
						}
						else{document.getElementById("e3.1.1").innerHTML ="";}
						
					var name3 = document.getElementById("Name3").value;	
						if(name3 == ""){
							document.getElementById("e3.2").innerHTML =" <a href='#Name3' style='color:red'>3.2 Please Enter Mother's Given Name</a><br>";
						}else if(specialchar.test(name3)){
							document.getElementById("e3.2").innerHTML =" <a href='#Name3' style='color:red'>3.2 Special Characters can not be allowed </a><br>";
						}else if(!character.test(name3)){
							document.getElementById("e3.2").innerHTML =" <a href='#Name3' style='color:red'>3.2 please fill Characters only </a><br>";
						}else if(name3.length>500){
							document.getElementById("e3.2").innerHTML =" <a href='#Name3' style='color:red'>3.2.organization name Characters limit is 500 </a><br>";	
						}
						else{document.getElementById("e3.2").innerHTML ="";}
						
					var surename3 = document.getElementById("Surname3").value;	
						if(surename3 == ""){
							document.getElementById("e3.2.1").innerHTML =" <a href='#Surname3' style='color:red'>3.2 Please Enter surename</a><br>";
						}else if(specialchar.test(surename3)){
							document.getElementById("e3.2.1").innerHTML =" <a href='#Surname3' style='color:red'>3.2 Special Characters can not be allowed </a><br>";
						}else if(!character.test(surename3)){
							document.getElementById("e3.2.1").innerHTML =" <a href='#Surname3' style='color:red'>3.2 please fill Characters only </a><br>";
						}else if(surename3.length>500){
							document.getElementById("e3.2.1").innerHTML =" <a href='#Surname3' style='color:red'>3.2.organization name Characters limit is 500 </a><br>";	
						}
						else{document.getElementById("e3.2.1").innerHTML ="";}
						
					var name4 = document.getElementById("Name4").value;	
						if(name4 == ""){
							document.getElementById("e3.3").innerHTML =" <a href='#Name4' style='color:red'>3.3 Please Enter Legal Guardian's Given Name</a><br>";
						}else if(specialchar.test(name4)){
							document.getElementById("e3.3").innerHTML =" <a href='#Name4' style='color:red'>3.3 Special Characters can not be allowed </a><br>";
						}else if(!character.test(name4)){
							document.getElementById("e3.3").innerHTML =" <a href='#Name4' style='color:red'>3.3 please fill Characters only </a><br>";
						}else if(name4.length>500){
							document.getElementById("e3.3").innerHTML =" <a href='#Name4' style='color:red'>3.3.organization name Characters limit is 500 </a><br>";	
						}
						else{document.getElementById("e3.3").innerHTML ="";}
						
					var surename4 = document.getElementById("Surname4").value;	
						if(surename4 == ""){
							document.getElementById("e3.3.1").innerHTML =" <a href='#Surname4' style='color:red'>3.3 Please Enter surename</a><br>";
						}else if(specialchar.test(surename4)){
							document.getElementById("e3.3.1").innerHTML =" <a href='#Surname4' style='color:red'>3.3 Special Characters can not be allowed </a><br>";
						}else if(!character.test(surename4)){
							document.getElementById("e3.3.1").innerHTML =" <a href='#Surname4' style='color:red'>3.3 please fill Characters only </a><br>";
						}else if(surename4.length>500){
							document.getElementById("e3.3.1").innerHTML =" <a href='#Surname4' style='color:red'>3.3.organization name Characters limit is 500 </a><br>";	
						}
						else{document.getElementById("e3.3.1").innerHTML ="";}
						
					var name5 = document.getElementById("Name5").value;	
						if(name5 == ""){
							document.getElementById("e3.4").innerHTML =" <a href='#Name5' style='color:red'>3.4 Please Enter Spouse's Given Name</a><br>";
						}else if(specialchar.test(name5)){
							document.getElementById("e3.4").innerHTML =" <a href='#Name5' style='color:red'>3.4 Special Characters can not be allowed </a><br>";
						}else if(!character.test(name5)){
							document.getElementById("e3.4").innerHTML =" <a href='#Name5' style='color:red'>3.4 please fill Characters only </a><br>";
						}else if(name5.length>500){
							document.getElementById("e3.4").innerHTML =" <a href='#Name5' style='color:red'>3.4.organization name Characters limit is 500 </a><br>";	
						}
						else{document.getElementById("e3.4").innerHTML ="";}
						
					var surename5 = document.getElementById("Surname5").value;	
						if(surename5 == ""){
							document.getElementById("e3.4.1").innerHTML =" <a href='#Surname5' style='color:red'>3.4 Please Enter surename</a><br>";
						}else if(specialchar.test(surename5)){
							document.getElementById("e3.4.1").innerHTML =" <a href='#Surname5' style='color:red'>3.4 Special Characters can not be allowed </a><br>";
						}else if(!character.test(surename5)){
							document.getElementById("e3.4.1").innerHTML =" <a href='#Surname5' style='color:red'>3.4 please fill Characters only </a><br>";
						}else if(surename5.length>500){
							document.getElementById("e3.4.1").innerHTML =" <a href='#Surname5' style='color:red'>3.4.organization name Characters limit is 500 </a><br>";	
						}
						else{document.getElementById("e3.4.1").innerHTML ="";}
						
					
						
					var number2 = document.getElementById("Passport_Number").value;	
						if(number2 == ""){
							document.getElementById("e3.5").innerHTML =" <a href='#Passport_Number' style='color:red'>3.5 Please Enter Father/ Legal Guardian's File/ Passport Number</a><br>";
						}else{document.getElementById("e3.5").innerHTML ="";}
						
					var number3 = document.getElementById("Passport_Number1").value;	
						if(number3 == ""){
							document.getElementById("e3.5.1").innerHTML =" <a href='#Passport_Number1' style='color:red'>3.5 Please Enter Mother/ Legal Guardian's File/ Passport Number</a><br>";
						}else{document.getElementById("e3.5.1").innerHTML ="";}
						
					var house = document.getElementById("House_No").value;	
						if(house == ""){
							document.getElementById("e4.1.1").innerHTML =" <a href='#House_No' style='color:red'>4.1 Please Enter House No. and Street Name</a><br>";
						}else if(house.length<10 || house.length>500){
							document.getElementById("e4.1.1").innerHTML =" <a href='#House_No' style='color:red'>4.1 House No atleast 10 and maximum 500 character</a><br>";	
						}else if(specialchar1.test(house)){
							document.getElementById("e4.1.1").innerHTML =" <a href='#House_No' style='color:red'>4.1 Special Characters can not be allowed</a><br>";
						}
						else{document.getElementById("e4.1.1").innerHTML ="";}
						
					var village = document.getElementById("Village").value;	
						if(village == ""){
							document.getElementById("e4.1.2").innerHTML =" <a href='#Village' style='color:red'>4.1 Please Enter Village or Town or City</a><br>";
						}else if(specialchar.test(village)){
							document.getElementById("e4.1.2").innerHTML =" <a href='#Village' style='color:red'>4.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(village)){
							document.getElementById("e4.1.2").innerHTML =" <a href='#Village' style='color:red'>4.1 please fill Characters only </a><br>";
						}
						else{document.getElementById("e4.1.2").innerHTML ="";}
						
					var station = document.getElementById("Police_Station").value;	
						if(station == ""){
							document.getElementById("e4.1.3").innerHTML =" <a href='#Police_Station' style='color:red'>4.1 Please Enter Police Station</a><br>";
						}else if(specialchar.test(station)){
							document.getElementById("e4.1.3").innerHTML =" <a href='#Police_Station' style='color:red'>4.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(station)){
							document.getElementById("e4.1.3").innerHTML =" <a href='#Police_Station' style='color:red'>4.1 please fill Characters only </a><br>";
						}
						else{document.getElementById("e4.1.3").innerHTML ="";}
						
					var district = document.getElementById("District").value;	
						if(district == ""){
							document.getElementById("e4.1.4").innerHTML =" <a href='#District' style='color:red'>4.1 Please Enter District</a><br>";
						}else if(specialchar.test(district)){
							document.getElementById("e4.1.4").innerHTML =" <a href='#District' style='color:red'>4.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(district)){
							document.getElementById("e4.1.4").innerHTML =" <a href='#District' style='color:red'>4.1 please fill Characters only </a><br>";
						}
						else{document.getElementById("e4.1.4").innerHTML ="";}
						
					var station1 = document.getElementById("State_UT2").value;	
						if(station1 == ""){
							document.getElementById("e4.1.5").innerHTML =" <a href='#State_UT2' style='color:red'>4.1 Please State/ UT</a><br>";
						}else if(specialchar.test(station1)){
							document.getElementById("e4.1.5").innerHTML =" <a href='#State_UT2' style='color:red'>4.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(station1)){
							document.getElementById("e4.1.5").innerHTML =" <a href='#State_UT2' style='color:red'>4.1 please fill Characters only </a><br>";
						}
						else{document.getElementById("e4.1.5").innerHTML ="";}
						
					var pin = document.getElementById("PIN").value;	
						if(pin == ""){
							document.getElementById("e4.1.6").innerHTML =" <a href='#PIN' style='color:red'>4.1 Please Enter PIN Number</a><br>";
						}else if(pin.length<6 || pin.length>6){
							document.getElementById("e4.1.6").innerHTML =" <a href='#PIN' style='color:red'>4.1 Pin number must be 6 digits</a><br>";	
						}else if(isNaN(pin)){
							document.getElementById("e4.1.6").innerHTML =" <a href='#PIN' style='color:red'>4.1 Enter Numbers Only</a><br>";
						}
						else{document.getElementById("e4.1.6").innerHTML ="";}
						
					var number4 = document.getElementById("Mobile_Number").value;	
						if(number4 == ""){
							document.getElementById("e4.1.7").innerHTML =" <a href='#Mobile_Number' style='color:red'>4.1 Please Enter Mobile Number</a><br>";
						}else if(isNaN(number4)){
							document.getElementById("e4.1.7").innerHTML =" <a href='#Mobile_Number' style='color:red'>4.1 please Enter Number only</a><br>";
						}else if(number4.length<10 || number4.length>10){
							document.getElementById("e4.1.7").innerHTML =" <a href='#Mobile_Number' style='color:red'>4.1 Mobile number must be 10 digits</a><br>";
						}
						else{document.getElementById("e4.1.7").innerHTML ="";}
						
					var number5 = document.getElementById("Telephone_Number").value;	
						if(number5 == ""){
							document.getElementById("e4.1.8").innerHTML =" <a href='#Telephone_Number' style='color:red'>4.1 Please Enter Telephone Number</a><br>";
						}else if(isNaN(number5)){
							document.getElementById("e4.1.8").innerHTML =" <a href='#Telephone_Number' style='color:red'>4.1 please Enter Number only</a><br>";
						}else if(number5.length<11 || number5.length>11){
							document.getElementById("e4.1.8").innerHTML =" <a href='#Telephone_Number' style='color:red'>4.1 Telephone number must be 11 digits</a><br>";
						}else{document.getElementById("e4.1.8").innerHTML ="";}
						
					var email1 = document.getElementById("E_mail_ID1").value;	
						if(email1 == ""){
							document.getElementById("e4.1.9").innerHTML =" <a href='#E_mail_ID1' style='color:red'>4.1 Please Enter Email ID</a><br>";
						}else if(email1.match(emailv)){
							document.getElementById("e4.1.9").innerHTML =" <a href='#E_mail_ID1' style='color:red'>4.1 please Enter valid email Address</a><br>";
						}
						else{document.getElementById("e4.1.9").innerHTML ="";}
						
					var address1 = document.forms.querySelector('input[name="address1"]:checked');
						if(address1 == null){	
							document.getElementById("e4.2").innerHTML =" <a href='#4.2' style='color:red'>4.2 Please Choose yes or no </a><br>";
						}else{document.getElementById("e4.2").innerHTML ="";}
						
					var address2 = document.getElementById("address2").value;
						if(document.getElementById("no11").checked){					
						if(address2 == ""){
							document.getElementById("e5.1.1").innerHTML =" <a href='#address2' style='color:red'>5.1 Please Enter Name and Address</a><br>";
						}else if(address2.length<10 || address2.length>500){
							document.getElementById("e5.1.1").innerHTML =" <a href='#address2' style='color:red'>5.1 Address atleast 10 and maximum 500 character</a><br>";	
						}else if(specialchar1.test(address2)){
							document.getElementById("e5.1.1").innerHTML =" <a href='#address2' style='color:red'>5.1 Special Characters can not be allowed</a><br>";
						}
						else{document.getElementById("e5.1.1").innerHTML ="";}
						}
						
					var number6 = document.getElementById("Mobile_Number2").value;	
						if(number6 == ""){
							document.getElementById("e5.1.2").innerHTML =" <a href='#Mobile_Number2' style='color:red'>5.1 Please Enter Mobile Number</a><br>";
						}else if(isNaN(number6)){
							document.getElementById("e5.1.2").innerHTML =" <a href='#Mobile_Number2' style='color:red'>5.1 please Enter Number only</a><br>";
						}else if(number6.length<10 || number6.length>10){
							document.getElementById("e5.1.2").innerHTML =" <a href='#Mobile_Number2' style='color:red'>5.1 Aadhar number must be 10 digits</a><br>";
						}
						else{document.getElementById("e5.1.2").innerHTML ="";}
						
					var number7 = document.getElementById("Telephone_Number2").value;	
						if(number7 == ""){
							document.getElementById("e5.1.3").innerHTML =" <a href='#Telephone_Number2' style='color:red'>5.1 Please Enter Telephone Number</a><br>";
						}else if(isNaN(number7)){
							document.getElementById("e5.1.3").innerHTML =" <a href='#Telephone_Number2' style='color:red'>5.1 please Enter Number only</a><br>";
						}else if(number7.length<11 || number7.length>11){
							document.getElementById("e5.1.3").innerHTML =" <a href='#Telephone_Number2' style='color:red'>5.1 Telephone number must be 11 digits</a><br>";
						}else{document.getElementById("e5.1.3").innerHTML ="";}
						
					var email2 = document.getElementById("E_mail_ID2").value;	
						if(email2 == ""){
							document.getElementById("e5.1.4").innerHTML =" <a href='#E_mail_ID2' style='color:red'>5.1 Please Enter Email ID</a><br>";
						}else if(email2.match(emailv)){
							document.getElementById("e5.1.4").innerHTML =" <a href='#E_mail_ID2' style='color:red'>5.1 please Enter valid email Address</a><br>";
						}
						else{document.getElementById("e5.1.4").innerHTML ="";}
						
					var number8 = document.getElementById("Certificate_Number").value;	
						if(document.getElementById("applay13").checked){
						if(number8 == ""){
							document.getElementById("e6.1.1").innerHTML =" <a href='#Certificate_Number' style='color:red'>6.1 Please Enter Passport/ Identity Certificate Number</a><br>";
						}else if(number8.length<8 || number8.length>8){
							document.getElementById("e6.1.1").innerHTML =" <a href='#Certificate_Number' style='color:red'>6.1 File number must be 8 digits</a><br>";	
						}else if(specialchar.test(number8)){
							document.getElementById("e6.1.1").innerHTML =" <a href='#Certificate_Number' style='color:red'>6.1 Special Characters can not be allowed</a><br>";
						}
						else{document.getElementById("e6.1.1").innerHTML ="";}
						}
						
					var date2 = document.getElementById("Date2").value;	
						
						var date123 = new Date(date2);
						if(document.getElementById("applay13").checked){
						if(date2 == ""){
							document.getElementById("e6.1.2").innerHTML =" <a href='#Date2' style='color:red'>6.1 Please Enter Date of Issue</a><br>";
						}else if(date123 >= currentdate){
							document.getElementById("e6.1.2").innerHTML =" <a href='#Date2' style='color:red'>6.1 future date can not be allowed</a><br>";
						}
						else{document.getElementById("e6.1.2").innerHTML ="";}
						}
						
					var date3 = document.getElementById("Date3").value;
						var expiry= new Date(date3);
						if(document.getElementById("applay13").checked){
						if(date3 == ""){
							document.getElementById("e6.1.3").innerHTML =" <a href='#Date3' style='color:red'>6.1 Please Enter Date of Expiry</a><br>";
						}else if(date123 >=expiry){
							document.getElementById("e6.1.3").innerHTML =" <a href='#Date2' style='color:red'>6.1 Expity Date not less then date of issue</a><br>";
						}else{document.getElementById("e6.1.3").innerHTML ="";}
						}
						
					var place2 = document.getElementById("Place_of_Issue").value;
						if(document.getElementById("applay13").checked){
						if(place2 == ""){
							document.getElementById("e6.1.4").innerHTML =" <a href='#Place_of_Issue' style='color:red'>6.1 Please Enter Place of Issue</a><br>";
						}else if(specialchar.test(place2)){
							document.getElementById("e6.1.4").innerHTML =" <a href='#Place_of_Issue' style='color:red'>6.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(place2)){
							document.getElementById("e6.1.4").innerHTML =" <a href='#Place_of_Issue' style='color:red'>6.1 please fill Characters only </a><br>";
						}
						else{document.getElementById("e6.1.4").innerHTML ="";}
						}
						
					var radio6 = document.forms.querySelector('input[name="radio6"]:checked');
						if(radio6 == null){	
							document.getElementById("e6.2").innerHTML =" <a href='#6.2' style='color:red'>6.2 Please Choose yes or no </a><br>";
						}else{document.getElementById("e6.2").innerHTML ="";}
						
					var number9 = document.getElementById("File_Number1").value;	
					if(document.getElementById("yesss").checked){
						if(number9 == ""){
							document.getElementById("e6.2.1").innerHTML =" <a href='#File_Number1' style='color:red'>6.2 Please Enter File Number</a><br>";
						}else if(number9.length<12 || number9.length>12){
							document.getElementById("e6.2.1").innerHTML =" <a href='#File_Number1' style='color:red'>6.2 File number must be 12 digits</a><br>";	
						}else if(specialchar.test(number9)){
							document.getElementById("e6.2.1").innerHTML =" <a href='#File_Number1' style='color:red'>6.2 Special Characters can not be allowed</a><br>";
						}else if(character1.test(number9[3])){
							document.getElementById("e6.2.1").innerHTML =" <a href='#File_Number1' style='color:red'>6.2 File number Should start with at least 4 Alphabets</a><br>";
						}else if(number9.slice(10,12) != last2){
							document.getElementById("e6.2.1").innerHTML =" <a href='#File_Number1' style='color:red'>6.2 File number Should End with last two digits of this year</a><br>";
						}
						else{document.getElementById("e6.2.1").innerHTML ="";}
					}
					
					var month = document.getElementById("Month").value;	
					if(document.getElementById("yesss").checked){
						if(month == ""){
							document.getElementById("e6.2.2").innerHTML =" <a href='#Month' style='color:red'>6.2 Please Enter Month and Year of applying</a><br>";
						}else{document.getElementById("e6.2.2").innerHTML ="";}
					}
					
					var office = document.getElementById("passport_office").value;	
					if(document.getElementById("yesss").checked){
						if(office == ""){
							document.getElementById("e6.2.3").innerHTML =" <a href='#passport_office' style='color:red'>6.2 Please Enter Name of passport office where applied</a><br>";
						}else if(specialchar.test(office)){
							document.getElementById("e6.2.3").innerHTML =" <a href='#passport_office' style='color:red'>6.2 Special Characters can not be allowed </a><br>";
						}else if(!character.test(office)){
							document.getElementById("e6.2.3").innerHTML =" <a href='#passport_office' style='color:red'>6.2 please fill Characters only </a><br>";
						}
						else{document.getElementById("e6.2.3").innerHTML ="";}
					}
					
					var radio711 = document.forms.querySelector('input[name="7.1.1"]:checked');
						if(radio711 == null){	
							document.getElementById("e7.1.1").innerHTML =" <a href='#7.1.1' style='color:red'>7.1.1 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.1.1").innerHTML ="";}
					
					var radio712 = document.forms.querySelector('input[name="7.1.2"]:checked');
						if(radio712 == null){	
							document.getElementById("e7.1.2").innerHTML =" <a href='#7.1.2' style='color:red'>7.1.2 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.1.2").innerHTML ="";}
						
					var radio713 = document.forms.querySelector('input[name="7.1.3"]:checked');
						if(radio713 == null){	
							document.getElementById("e7.1.3").innerHTML =" <a href='#7.1.3' style='color:red'>7.1.3 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.1.3").innerHTML ="";}
						
					var radio714 = document.forms.querySelector('input[name="7.1.4"]:checked');
						if(radio714 == null){	
							document.getElementById("e7.1.4").innerHTML =" <a href='#7.1.4' style='color:red'>7.1.4 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.1.4").innerHTML ="";}
						
					var radio721 = document.forms.querySelector('input[name="7.2.1"]:checked');
						if(radio721 == null){	
							document.getElementById("e7.2.1").innerHTML =" <a href='#7.2.1' style='color:red'>7.2.1 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.2.1").innerHTML ="";}
						
					var radio731 = document.forms.querySelector('input[name="7.3.1"]:checked');
						if(radio731 == null){	
							document.getElementById("e7.3.1").innerHTML =" <a href='#7.3.1' style='color:red'>7.3.1 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.3.1").innerHTML ="";}
						
					var radio732 = document.forms.querySelector('input[name="7.3.2"]:checked');
						if(radio732 == null){	
							document.getElementById("e7.3.2").innerHTML =" <a href='#7.3.2' style='color:red'>7.3.2 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.3.2").innerHTML ="";}
						
					var radio733 = document.forms.querySelector('input[name="7.3.3"]:checked');
						if(radio733 == null){	
							document.getElementById("e7.3.3").innerHTML =" <a href='#7.3.3' style='color:red'>7.3.3 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.3.3").innerHTML ="";}
						
					var radio741 = document.forms.querySelector('input[name="7.4.1"]:checked');
						if(radio741 == null){	
							document.getElementById("e7.4.1").innerHTML =" <a href='#7.4.1' style='color:red'>7.4.1 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.4.1").innerHTML ="";}
						
					var radio742 = document.forms.querySelector('input[name="7.4.2"]:checked');
						if(radio742 == null){	
							document.getElementById("e7.4.2").innerHTML =" <a href='#7.4.2' style='color:red'>7.4.2 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.4.2").innerHTML ="";}
						
					var radio743 = document.forms.querySelector('input[name="7.4.3"]:checked');
						if(radio743 == null){	
							document.getElementById("e7.4.3").innerHTML =" <a href='#7.4.3' style='color:red'>7.4.3 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.4.3").innerHTML ="";}
						
					var radio744 = document.forms.querySelector('input[name="7.4.4"]:checked');
						if(radio744 == null){	
							document.getElementById("e7.4.4").innerHTML =" <a href='#7.4.4' style='color:red'>7.4.4 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.4.4").innerHTML ="";}
						
					var radio751 = document.forms.querySelector('input[name="7.5.1"]:checked');
						if(radio751 == null){	
							document.getElementById("e7.5.1").innerHTML =" <a href='#7.5.1' style='color:red'>7.5.1 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.5.1").innerHTML ="";}
						
					var radio752 = document.forms.querySelector('input[name="7.5.2"]:checked');
						if(radio752 == null){	
							document.getElementById("e7.5.2").innerHTML =" <a href='#7.5.2' style='color:red'>7.5.2 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.5.2").innerHTML ="";}
						
					var radio753 = document.forms.querySelector('input[name="7.5.3"]:checked');
						if(radio753 == null){	
							document.getElementById("e7.5.3").innerHTML =" <a href='#7.5.3' style='color:red'>7.5.3 Please Choose yes or no </a><br>";
						}else{document.getElementById("e7.5.3").innerHTML ="";}
						
					var amount = document.getElementById("Fee_amount").value;	
						if(amount == ""){
							document.getElementById("e8.1").innerHTML =" <a href='#Fee_amount' style='color:red'>8.1 Please Enter Fee Amount</a><br>";
						}else if(isNaN(amount)){
							document.getElementById("e8.1").innerHTML =" <a href='#Fee_amount' style='color:red'>8.1 Enter number Only</a><br>";	
						}else if(specialchar1.test(amount)){
							document.getElementById("e8.1").innerHTML =" <a href='#Fee_amount' style='color:red'>8.1 Special Characters can not be allowed</a><br>";
						}
						else{document.getElementById("e8.1").innerHTML ="";}
						
					var number10 = document.getElementById("DD_Number").value;	
						if(number10 == ""){
							document.getElementById("e8.2.1").innerHTML =" <a href='#DD_Number' style='color:red'>8.2 Please Enter DD Number</a><br>";
						}else if(isNaN(number10)){
							document.getElementById("e8.2.1").innerHTML =" <a href='#DD_Number' style='color:red'>8.2 Enter number Only</a><br>";	
						}else if(specialchar.test(number10)){
							document.getElementById("e8.2.1").innerHTML =" <a href='#DD_Number' style='color:red'>8.2 Special Characters can not be allowed</a><br>";
						}
						else{document.getElementById("e8.2.1").innerHTML ="";}
						
					var date4 = document.getElementById("DD_of_Issue").value;
						var date1234= new Date(date4);
						if(date4 == ""){
							document.getElementById("e8.2.2").innerHTML =" <a href='#DD_of_Issue' style='color:red'>8.2 Please Enter DD of Issue</a><br>";
						}else if(date1234 >= currentdate){
							document.getElementById("e8.2.2").innerHTML =" <a href='#DD_of_Issue' style='color:red'>8.2 future date can not be allowed</a><br>";
						}else{document.getElementById("e8.2.2").innerHTML ="";}
						
					var date5 = document.getElementById("DD_of_Expiry").value;
						var dat=new Date(date5);
						if(date5 == ""){
							document.getElementById("e8.2.3").innerHTML =" <a href='#DD_of_Expiry' style='color:red'>8.2 Please Enter DD of Expiry</a><br>";
						}else if(date123 >=dat){
							document.getElementById("e8.2.3").innerHTML =" <a href='#DD_of_Expiry' style='color:red'>8.2 Expity Date not less then date of issue</a><br>";
						}else{document.getElementById("e8.2.3").innerHTML ="";}
						
					var name6 = document.getElementById("Bank_Name").value;	
						if(name6 == ""){
							document.getElementById("e8.2.4").innerHTML =" <a href='#Bank_Name' style='color:red'>8.2 Please Enter Bank Name</a><br>";
						}else if(specialchar.test(name6)){
							document.getElementById("e8.2.4").innerHTML =" <a href='#Bank_Name' style='color:red'>8.2 Special Characters can not be allowed</a><br>";
						}
						else{document.getElementById("e8.2.4").innerHTML ="";}
						
					var name7 = document.getElementById("Branch_Name").value;	
						if(name7 == ""){
							document.getElementById("e8.2.5").innerHTML =" <a href='#Branch_Name' style='color:red'>8.2 Please Enter Branch Name</a><br>";
						}else if(specialchar.test(name7)){
							document.getElementById("e8.2.5").innerHTML =" <a href='#Branch_Name' style='color:red'>8.2 Special Characters can not be allowed</a><br>";
						}
						else{document.getElementById("e8.2.5").innerHTML ="";}
						
					var Enclosures = document.getElementById("1").value;	
						if(Enclosures == ""){
							document.getElementById("e9.1").innerHTML =" <a href='#1' style='color:red'>9.1 Please Enter Enclosures</a><br>";
						}else{document.getElementById("e9.1").innerHTML ="";}
						
					var place4= document.getElementById("Place").value;	
						if(place4 == ""){
							document.getElementById("e10.1").innerHTML =" <a href='#Place' style='color:red'>10.1 Please Enter place</a><br>";
						}else if(specialchar.test(place4)){
							document.getElementById("e10.1").innerHTML =" <a href='#Place' style='color:red'>10.1 Special Characters can not be allowed </a><br>";
						}else if(!character.test(place4)){
							document.getElementById("e10.1").innerHTML =" <a href='#Place' style='color:red'>10.1 please fill Characters only </a><br>";
						}
						else{document.getElementById("e10.1").innerHTML ="";}
						
					var date6 = document.getElementById("Date4").value;	
					var date123423 = new Date().getDate();
					var date78= new Date(date6).getDate();
						if(date6 == ""){
							document.getElementById("e10.2").innerHTML =" <a href='#Date4' style='color:red'>10.2 Please Enter Date</a><br>";
						}else if(date78!=date123423){
							document.getElementById("e10.2").innerHTML =" <a href='#Date4' style='color:red'>10.2 please Enter Todays Date</a><br>";
						}else{document.getElementById("e10.2").innerHTML ="";}
						
					var select1 = document.getElementById("Select1").value;	
					
						if(select1 == ""){
							document.getElementById("e10.3").innerHTML =" <a href='#Select1' style='color:red'>10.3 Please Choose File</a><br>";
						}else if(!allowedExtensions.exec(select1)){
							document.getElementById("e10.3").innerHTML =" <a href='#Select1' style='color:red'>10.3 Please Choose .jpg|.jpeg|.png|.gif only</a><br>";
						}
						else{document.getElementById("e10.3").innerHTML ="";}
						
					return false;
						
						
}
				
				




function applayfor()
{
		
	document.getElementById("reissue1").disabled = true;
	document.getElementById("reissue2").disabled = true;
	document.getElementById("reissue3").disabled = true;
	document.getElementById("reissue4").disabled = true;
	document.getElementById("reissue5").disabled = true;
	document.getElementById("reissue6").disabled = true;
	document.getElementById("reason1").disabled = true;
	document.getElementById("reason2").disabled = true;
	document.getElementById("reason3").disabled = true;
	document.getElementById("reason4").disabled = true;
	document.getElementById("reason5").disabled = true;
	document.getElementById("reason6").disabled = true;
	document.getElementById("reason7").disabled = true;
	document.getElementById("reason8").disabled = true;
	document.getElementById("reason9").disabled = true;
	
	document.getElementById("Certificate_Number").disabled = true;
	document.getElementById("Date2").disabled = true;
	document.getElementById("Date3").disabled = true;
	document.getElementById("Place_of_Issue").disabled = true;
	document.getElementById("File_Number1").disabled = true;
	document.getElementById("Month").disabled = true;
	document.getElementById("passport_office").disabled = true;
}
function applayfor1()
{
							
	document.getElementById("reissue1").disabled = false;
	document.getElementById("reissue2").disabled = false;
	document.getElementById("reissue3").disabled = false;
	document.getElementById("reissue4").disabled = false;
	document.getElementById("reissue5").disabled = false;
	document.getElementById("reissue6").disabled = false;
	document.getElementById("Certificate_Number").disabled = false;
	document.getElementById("Date2").disabled = false;
	document.getElementById("Date3").disabled = false;
	document.getElementById("Place_of_Issue").disabled = false;
	
}

function addres(){
	document.getElementById("address2").disabled = true;
}
function addres1(){
	document.getElementById("address2").disabled = false;
}
function issue62(){
	document.getElementById("File_Number1").disabled = false;
	document.getElementById("Month").disabled = false;
	document.getElementById("passport_office").disabled = false;
}
function issue63(){
	document.getElementById("File_Number1").disabled = true;
	document.getElementById("Month").disabled = true;
	document.getElementById("passport_office").disabled = true;
}

function psu(){
	document.getElementById("employed").disabled = false;
}function gov(){
	document.getElementById("employed").disabled = false;
}function sta(){
	document.getElementById("employed").disabled = false;
}function ret(){
	document.getElementById("employed").disabled = true;
}function sel(){
	document.getElementById("employed").disabled = true;
}function pri(){
	document.getElementById("employed").disabled = true;
}function hom(){
	document.getElementById("employed").disabled = true;
}function not(){
	document.getElementById("employed").disabled = true;
}function ser(){
	document.getElementById("employed").disabled = true;
}function den(){
	document.getElementById("employed").disabled = true;
}
function o1(){
	document.getElementById("employed").disabled = true;
}function o2		(){
	document.getElementById("employed").disabled = true;
}
function change1(){
	document.getElementById("reason1").disabled = true;
	document.getElementById("reason2").disabled = true;
	document.getElementById("reason3").disabled = true;
	document.getElementById("reason4").disabled = true;
	document.getElementById("reason5").disabled = true;
	document.getElementById("reason6").disabled = true;
	document.getElementById("reason7").disabled = true;
	document.getElementById("reason8").disabled = true;
	document.getElementById("reason9").disabled = true;
	
}function change2(){
	document.getElementById("reason1").disabled = true;
	document.getElementById("reason2").disabled = true;
	document.getElementById("reason3").disabled = true;
	document.getElementById("reason4").disabled = true;
	document.getElementById("reason5").disabled = true;
	document.getElementById("reason6").disabled = true;
	document.getElementById("reason7").disabled = true;
	document.getElementById("reason8").disabled = true;
	document.getElementById("reason9").disabled = true;
	
}function change3(){
	document.getElementById("reason1").disabled = true;
	document.getElementById("reason2").disabled = true;
	document.getElementById("reason3").disabled = true;
	document.getElementById("reason4").disabled = true;
	document.getElementById("reason5").disabled = true;
	document.getElementById("reason6").disabled = true;
	document.getElementById("reason7").disabled = true;
	document.getElementById("reason8").disabled = true;
	document.getElementById("reason9").disabled = true;
	
}function change4(){
	document.getElementById("reason1").disabled = true;
	document.getElementById("reason2").disabled = true;
	document.getElementById("reason3").disabled = true;
	document.getElementById("reason4").disabled = true;
	document.getElementById("reason5").disabled = true;
	document.getElementById("reason6").disabled = true;
	document.getElementById("reason7").disabled = true;
	document.getElementById("reason8").disabled = true;
	document.getElementById("reason9").disabled = true;
	
}function change5(){
	document.getElementById("reason1").disabled = false;
	document.getElementById("reason2").disabled = false;
	document.getElementById("reason3").disabled = false;
	document.getElementById("reason4").disabled = false;
	document.getElementById("reason5").disabled = false;
	document.getElementById("reason6").disabled = false;
	document.getElementById("reason7").disabled = false;
	document.getElementById("reason8").disabled = false;
	document.getElementById("reason9").disabled = false;
	
}function change6(){
	document.getElementById("reason1").disabled = true;
	document.getElementById("reason2").disabled = true;
	document.getElementById("reason3").disabled = true;
	document.getElementById("reason4").disabled = true;
	document.getElementById("reason5").disabled = true;
	document.getElementById("reason6").disabled = true;
	document.getElementById("reason7").disabled = true;
	document.getElementById("reason8").disabled = true;
	document.getElementById("reason9").disabled = true;
	
}
function pla(){
	document.getElementById("Place1").disabled = false;
	document.getElementById("District1").disabled = false;
	document.getElementById("State_UT1").disabled = false;
}
function pla1(){
	document.getElementById("Place1").disabled = true;
	document.getElementById("District1").disabled = true;
	document.getElementById("State_UT1").disabled = true;
}
function other(){
	document.getElementById("reason10").disabled = false;
	
}
