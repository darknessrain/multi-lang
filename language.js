//多語系動態網頁介面配搭CSS切換程式碼
//Coding by Jerry Shih @ Quanta Computer Inc. - 2016/06/30
//使用時必須在HTML HEAD標籤掛入本.JS檔案
//主要功能1 : Multi-lang Title 根據 on_click 事件切換網頁標題
//主要功能2 : 賦予Body 語系標籤，例如 TW,ENG,JP。以便讓不同的CSS樣式來切換背景圖片
//主要功能3 : 使用DOM方法，更換下拉顯示介面
//主要功能4 : 使用DOM方法，依照語系更改文件內的文字





//=====程式開始======






function chg_lang(lang_index){


			//更改標題文字
      changeWebTitle(lang_index);

      //更改BODY 語系標籤
      changeCSSTag_Multi_Lang(lang_index);

      //更改Navbar文件
      changeNavBarUIWording(lang_index);


      //讀外部JSON檔案
      var xmlhttp = new XMLHttpRequest();
      var url = "navbar_multi_lang_wording.txt";

      xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          changeAllNavBarUIWording(myArr,lang_index);
          }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.send();

		}


function changeWebTitle(lang_index){
      //變更多語系網頁Title
      document.getElementsByTagName("title")[0].innerHTML = Multi_Lang_Title[lang_index];
      return;
}

function changeCSSTag_Multi_Lang(lang_index){
    // jQuery 語法:
    //  $("body").removeClass("tw cn en").addClass($(this).data("資料名"));

    //純DOM語法
    document.getElementsByTagName("body")[0].className = "";
    document.getElementsByTagName("body")[0].className = Multi_Lang_Tag[lang_index];//Multi_Lang_Tag[lang_index];
    return;
}

function changeNavBarUIWording(lang_index){

  //更改Drondown UI 語系顯示
  //document.getElementById('lang_btn_1').innerHTML = Multi_Lang_Wording[lang_index];

  document.getElementById('change_dropdown_title').innerHTML =  Multi_Lang_Wording[lang_index]+'<b class="caret"></b>';
  //document.getElementById('change1').innerHTML =  "Win";//Multi_Lang_Wording[lang_index];//NavLinkobj[1].NavLink1;
  return;
}

function changeAllNavBarUIWording(arr,lang_index){
  var out="";
  //out = arr[lang_index].NavLink1;
  document.getElementById('nav_link1_wording').innerHTML = arr[lang_index].NavLink1;
  document.getElementById('nav_link2_wording').innerHTML = arr[lang_index].NavLink2;
  document.getElementById('nav_link3_wording').innerHTML = arr[lang_index].NavLink3;
  document.getElementById('nav_link4_wording').innerHTML = arr[lang_index].NavLink4;
  document.getElementById('nav_link5_wording').innerHTML = arr[lang_index].NavLink5;

  return;
}







//=====文字儲存區======
//多語系body標籤
Multi_Lang_Tag = new Array();
Multi_Lang_Tag[0]="tw";
Multi_Lang_Tag[1]="eng";
Multi_Lang_Tag[2]="jp";

//Multi_Lang_Wording 供介面顯示
Multi_Lang_Wording = new Array();
Multi_Lang_Wording[0]="繁體中文";
Multi_Lang_Wording[1]="English";
Multi_Lang_Wording[2]="日本語";

//多語系網頁Title招呼語 (顯示在瀏覽TAB上)
Multi_Lang_Title= new Array();
Multi_Lang_Title[0]="歡迎來到EQL - PC Stick網站";
Multi_Lang_Title[1]="Welcome to EQL - PC Stick";
Multi_Lang_Title[2]="EQLへようこそ - PC Stick";

//多語系Nav bar語言 ， 使用JSON 格式儲存 Nav Bar所需要的UI連結

/*var LinkItems = '[{"NavLink1": "動作原理", "NavLink2": "如何安裝", "NavLink3" : "規格","NavLink4" : "產品支援","NavLink5" : ""}, //第一語言NAV BAR文字
			      {"NavLink1": "How It Works", "NavLink2": "How To Install", "NavLink3" : "Specific","NavLink4" : "Support","NavLink5" : ""}, //第二語言NAV BAR文字
            {"NavLink1": "使い方", "NavLink2": "インストール", "NavLink3" : "仕様","NavLink4" : "サポート","NavLink5" : ""}, //第三語言NAV BAR文字
          ]';
var jsonSum = LinkItems.length; */


//






//=====文字儲存區 END======
