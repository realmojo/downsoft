const head = document.getElementsByTagName("head")[0];
const bScript = document.createElement("script");
bScript.type = "text/javascript";
bScript.src =
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js";
head.appendChild(bScript);

const getExt = (logo) => {
  let s = logo.split(".");
  return s[s.length - 1];
};

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
  const number = Math.floor(Math.random() * 2) + 3;
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

    // logo
    let logo = "";
    a = $(".app-icon")[0];
    logo = $(a).attr("src");

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
        if (specText.indexOf("window") !== -1) {
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
        if (t.length) {
          t.each((key, o) => {
            if ($(o).attr("data-meta") === "button-developer") {
              developer = $(o).text().trim().toLowerCase();
              developerLink = $(o).attr("href");
            }
          });
        } else {
          developer = specText;
          developerLink = "";
        }
      } else if (specTitle.indexOf("언어") !== -1) {
        if (specText.indexOf("English") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "en";
          }
          altLanguages.push("en");
        }
        if (specText.indexOf("Korean") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "kr";
          }
          altLanguages.push("kr");
        }
        if (specText.indexOf("Russian") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "ru";
          }
          altLanguages.push("ru");
        }
        if (specText.indexOf("Czech") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "cz";
          }
          altLanguages.push("cz");
        }
        if (specText.indexOf("German") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "de";
          }
          altLanguages.push("de");
        }
        if (specText.indexOf("Spanish") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "es";
          }
          altLanguages.push("es");
        }
        if (specText.indexOf("Finnish") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "fi";
          }
          altLanguages.push("fi");
        }
        if (specText.indexOf("Danish") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "dk";
          }
          altLanguages.push("dk");
        }
        if (specText.indexOf("Italian") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "it";
          }
          altLanguages.push("it");
        }
        if (specText.indexOf("Japanese") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "jp";
          }
          altLanguages.push("jp");
        }
        if (specText.indexOf("Dutch") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "nl";
          }
          altLanguages.push("nl");
        }
        if (specText.indexOf("Norwegian") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "no";
          }
          altLanguages.push("no");
        }
        if (specText.indexOf("Polish") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "pl";
          }
          altLanguages.push("pl");
        }
        if (specText.indexOf("Portuguese") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "pt";
          }
          altLanguages.push("pt");
        }
        if (specText.indexOf("Swedish") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "se";
          }
          altLanguages.push("se");
        }
        if (specText.indexOf("Chinese") !== -1) {
          if (!primaryLanguage) {
            primaryLanguage = "cn";
          }
          altLanguages.push("cn");
        }
      }
    });

    a = $(".other-platform-chip__text");
    const otherosText = a.text().toLowerCase();
    if (otherosText.indexOf('and') !== -1) {
      os.push('android')
    }
    if (otherosText.indexOf('iphone') !== -1) {
      os.push('iphone')
    }
    if (otherosText.indexOf("window") !== -1) {
      os.push('windows')
    }
    if (otherosText.indexOf("mac") !== -1) {
      os.push('mac')
    }

    const params = {
      title: title,
      slug: replaceAll(replaceAll(title.toLowerCase(), " ", "-"), "/", "-"),
      os: os,
      logo: logo,
      ext: getExt(logo),
      category: "security",
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
      // url: "https://f5game-bot.herokuapp.com/downsoft/addContents",
      url: "http://localhost:3001/downsoft/addContents",
      data: params,
    }).done((res) => {
      console.log(res);
    });
  };
  sendInfo();
}, 1000);
