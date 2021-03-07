// For Switching tabs for Feature section
const tabs = document.querySelectorAll(".tab");
const features = document.querySelectorAll(".features-content");

// To add and remove Border
const switchTabs = (e) => {
  e.preventDefault();
  clearBorder();
  clearContent();
  e.target.classList.add("show-tab");

  switchTabContent();
};

// To switch contents of tab
const switchTabContent = () => {
  tabs.forEach((tab, index) => {
    tab.classList.contains("show-tab")
      ? features[index].classList.add("show-content")
      : null;
  });
};

// For clear content
const clearContent = () => {
  features.forEach((feature) => {
    feature.classList.contains("show-content")
      ? feature.classList.remove("show-content")
      : null;
  });
};

// For removing border
const clearBorder = () => {
  tabs.forEach((tab) => {
    tab.classList.contains("show-tab")
      ? tab.classList.remove("show-tab")
      : null;
  });
};

// Looping through tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", switchTabs);
});

// For Mobile Hamburger Toggle
document.querySelector(".menu-btn").addEventListener("click", () => {
  const selectUl = document.querySelector(".nav-links");

  selectUl.classList.toggle("show");
});

// Back to top
var igniel_kecepatan = 1000; 
var igniel_jarak = 400;
eval(
    (function (p, a, c, k, e, d) {
        e = function (c) {
            return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
        };
        if (!"".replace(/^/, String)) {
            while (c--) {
                d[e(c)] = k[c] || e(c);
            }
            k = [
                function (e) {
                    return d[e];
                },
            ];
            e = function () {
                return "\\w+";
            };
            c = 1;
        }
        while (c--) {
            if (k[c]) {
                p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
            }
        }
        return p;
    })(
        'f 7=["\\h\\a\\g\\h\\F","\\C\\h\\w\\c\\a\\a\\l\\c\\v","\\e\\c\\h\\K\\p\\9\\d\\b\\m\\a\\9\\p\\9\\d\\b","\\G\\c\\e\\q","\\J\\e\\e\\m\\I\\9\\d\\b\\H\\g\\C\\b\\9\\d\\9\\w","\\g\\u\\d\\g\\9\\a\\l\\c\\l\\c\\v","\\u\\9\\b\\m\\a\\9\\p\\9\\d\\b\\M\\q\\U\\e"];8[7[6]](7[5])[7[4]](7[0],j x(){f i=8[7[2]][7[1]]||8[7[3]][7[1]];o(k<=0){s};f r=0-i;f t=r/k*X;L(j(){8[7[3]][7[1]]=8[7[2]][7[1]]=i+t;o(i==0){s};x(8[7[3]],0,k)},P)},Q);B.Y(\'O\',j(){o(B.N>=n||8.R.z>=n||8.W.z>=n){8.y(\'A\').E.D=\'V\'}T{8.y(\'A\').E.D=\'S\'}});',
        61,
        61,
        "|||||||_0x3e17|document|x65|x6C|x74|x6F|x6E|x64|var|x69|x63|_0x2ceax2|function|igniel_kecepatan|x54|x45|igniel_jarak|if|x6D|x79|_0x2ceax3|return|_0x2ceax4|x67|x70|x72|ignielScroll|getElementById|scrollTop|ignielToTop|window|x73|display|style|x6B|x62|x4C|x76|x61|x75|setTimeout|x42|pageYOffset|scroll|10|false|documentElement|none|else|x49|block|body|50|addEventListener".split(
            "|"
        ),
        0,
        {}
    )
);