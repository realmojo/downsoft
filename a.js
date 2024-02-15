const head = document.getElementsByTagName("head")[0];
const bScript = document.createElement("script");
bScript.type = "text/javascript";
bScript.src =
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js";
head.appendChild(bScript);

const transUpdated = (value) => {
  const d = value.split(".");
  let year = d[0].trim();
  let month = d[1].trim();
  let day = d[2].trim();

  month = Number(month) < 10 ? `0${month}` : month;
  day = Number(day) < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

const replaceAll = (str, searchStr, replaceStr) => {
  return str.split(searchStr).join(replaceStr);
};

const randomRate = () => {
  const fix = Math.random().toFixed(2);
  const number = Math.floor(Math.random() * 3) + 3;
  return Number(number) + Number(fix);
};

setTimeout(async () => {
  const sendInfo = async () => {
    let a = "";

    // title
    a = $(".app-header__name > a");
    $(a[0]).find("span").remove();
    const title = $(a[0]).text().trim();

    // license
    a = $(".license-type--fix-medium");
    let license = $(a[0]).text().trim();

    // version
    let version = "";
    a = $(".app-header__item");
    a.each((key, obj) => {
      if ($(obj).attr("data-meta") === "version") {
        version = $(obj).text().trim().toLowerCase();
      }
    });

    // app spec
    a = $(".app-specs__list > li");
    let specTitle = "";
    let specText = "";
    let t = "";
    let updated = "";
    let primaryLanguage = "";
    let altLanguages = [];
    let developer = "";
    let developerLink = "";
    let os = [];
    a.each((key, obj) => {
      specTitle = $(obj).find(".app-specs__title").text();
      specText = $(obj).find(".app-specs__description").text();

      if (specTitle === "라이센스") {
        license = specText;
      } else if (specTitle === "버전" && version === "") {
        version = specText;
      } else if (specTitle === "업데이트 날짜") {
        updated = transUpdated(specText);
      } else if (specTitle === "OS") {
        specText = specText.toLowerCase();
        if (specText.indexOf("Window") !== -1) {
          os.push("windows");
        } else if (specText.indexOf("mac") !== -1) {
          os.push("mac");
        } else if (specText.indexOf("and") !== -1) {
          os.push("android");
        } else if (specText.indexOf("iphone") !== -1) {
          os.push("iphone");
        }
      } else if (specTitle === "개발자") {
        t = $(obj).find(".app-specs__link");
        t.each((key, o) => {
          if ($(o).attr("data-meta") === "button-developer") {
            developer = $(o).text().trim().toLowerCase();
            developerLink = $(o).attr("href");
          }
        });
      } else if (specTitle.indexOf("언어") !== -1) {
        if (specText.indexOf("English") !== -1) {
          primaryLanguage = "en";
          altLanguages.push("en");
        }
        if (specText.indexOf("Korean") !== -1) {
          primaryLanguage = "kr";
          altLanguages.push("kr");
        }
        if (specText.indexOf("Russian") !== -1) {
          primaryLanguage = "ru";
          altLanguages.push("ru");
        }
        if (specText.indexOf("Czech") !== -1) {
          primaryLanguage = "cz";
          altLanguages.push("cz");
        }
        if (specText.indexOf("German") !== -1) {
          primaryLanguage = "de";
          altLanguages.push("de");
        }
        if (specText.indexOf("Spanish") !== -1) {
          primaryLanguage = "es";
          altLanguages.push("es");
        }
        if (specText.indexOf("Finnish") !== -1) {
          primaryLanguage = "fi";
          altLanguages.push("fi");
        }
        if (specText.indexOf("Italian") !== -1) {
          primaryLanguage = "it";
          altLanguages.push("it");
        }
        if (specText.indexOf("Japanese") !== -1) {
          primaryLanguage = "jp";
          altLanguages.push("jp");
        }
        if (specText.indexOf("Dutch") !== -1) {
          primaryLanguage = "nl";
          altLanguages.push("nl");
        }
        if (specText.indexOf("Norwegian") !== -1) {
          primaryLanguage = "no";
          altLanguages.push("no");
        }
        if (specText.indexOf("Polish") !== -1) {
          primaryLanguage = "pl";
          altLanguages.push("pl");
        }
        if (specText.indexOf("Portuguese") !== -1) {
          primaryLanguage = "pt";
          altLanguages.push("pt");
        }
        if (specText.indexOf("Swedish") !== -1) {
          primaryLanguage = "se";
          altLanguages.push("se");
        }
        if (specText.indexOf("Chinese") !== -1) {
          primaryLanguage = "cn";
          altLanguages.push("cn");
        }
      }
    });

    const params = {
      title: title,
      slug: replaceAll(title.toLowerCase(), " ", "-"),
      os: os,
      category: "game",
      license: license,
      primaryLanguage: primaryLanguage,
      altLanguages: altLanguages,
      developer: developer,
      developerLink: developerLink,
      rate: randomRate(),
      viewCount: 0,
      downloadCount: 0,
      updated: updated,
      version: replaceAll(version.toLowerCase(), " ", ""),
      security: "excellent",
      active: "wait",
    };

    console.log(params);

    $.ajax({
      type: "post",
      url: "http://localhost:3000/downsoft/addContents",
      data: params,
    }).done((res) => {
      console.log(res);
    });
  };
  sendInfo();
}, 1000);
