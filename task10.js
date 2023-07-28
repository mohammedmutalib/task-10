function bandNamesSort(bandNames) {
    const articles = ["The", "A", "An"];
    function startsWithArticle(name) {
      return articles.some(article => name.startsWith(article + " "));
    }
    bandNames.sort((a, b) => {
      const aHasArticle = startsWithArticle(a);
      const bHasArticle = startsWithArticle(b);
  
      if (aHasArticle && !bHasArticle) {
        return 1;
      } else if (!aHasArticle && bHasArticle) {
        return -1;
      } else {
        return a.localeCompare(b);
      }
    });
    return bandNames;
  }
  console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"]));
  console.log(bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"]));
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]));
  