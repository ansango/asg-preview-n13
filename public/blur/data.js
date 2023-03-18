const data = [
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAsBMJYwCdAEUnwBTUAD+sj+N0utHKBogbDRaaRzEm100o2Mt/TQAAA==",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJYwCdADze7UQAP7eON17tcc7A4tjeMMr/2nfC7f/yHIAAAA=",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJYwCdADyfvaAAP7gCfW9M2fmGg/5BiQZcz0CTaiIqhMYqKJ+AAAA",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJYgCdAEfbfw3wAD5QliBbloo1ftBi+mgQ97dqPKT0wb7bPdLboNfJdC80AAA",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJQBOgCHM/jvAAPz8LeGBo7onX6cHezaqsqwC9vgB214pjAAAAA==",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJZgCdADyfvaAAP7Spb7T24C0rBPcOrh11crNLlVbpWR5Ur69ay+kVqzCAAAA",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJYgCdADze7UQAPyO9bDZvU1lS8dIZi4/FnqR/TWTNPoVSG9xByV+U58oAAAA",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAwAgCdASoIAAUAAsBMJbACdLoBJgALMESwkAD947jrit8XiXDLw4qO3FYIA0SE19HrOZHEDiH5x+54LtNnsU4AAAA=",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJQBOgCHanqbQAM45sW/18nzBWvvC+FXR5Rd3hKLwpfPellmTgy22eQAAAA==",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAUAAsBMJZQCdAEO+kUiAMtP9habSeBbyz7l3pw+BAAA",
  },
  {
    folder: "32-agosto-2020-fuji-c200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJQBOgCHXYJAAAM3z9p3ghN9wjwAP54O05BlivX/DgKWAAAA=",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJYgCdAEOO/CwAPjl+Wj+CAfvy9pMp+TkU09bTAuoJSXS5rkrR3sxQAAAAA==",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJQBOgB6GMUaAAP6bs7f7GMQLPr6tO8yIS1VTjeW++RkVb2leZu9ppsoE80AA",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJQBOgCHM/k4AAPzZX189v8qxACmiIqOvKbLYF2sKvWiKgAA=",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAsBMJagCdAEO/gLsAP1Tj0Q3FZEz7ZwO6Vj75DEip3jIevvKXREf5uE+BNAE8L5aKgAAAA==",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoIAAUAAsBMJbACdAD0eqnsAP55OCChdCD2p6NdEu9z/WIJM9Pkh6dsUUQDH6FfJoCyOKQ/TUtqZI+jGCdCv4MkAAA=",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJbACdAEO/gPIAAD+T+pcidGhAb93jidGAcwc/yHNT45+v0fTBvxvP30AAA==",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAABwAQCdASoIAAUAAsBMJbACdAGIQAD+0nc0MBjqP08d1v8Dpm1OpBA/M86Z/u45JP2uL9gZqDAqwAAA",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAUAAsBMJaACdAEf3W5ry4AA/u7p1ep7p4jKIzHl9OgYwbeWRjNLft+KJ1WdTfnSQAAA",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAUAAsBMJQBOgBuoyNoAAP7QdHnG/XTWxLJXj2/VGjoFvZc1Uq/UV1HRBlsFN8Lj+vhQo51obMHgAAA=",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAAAQAgCdASoIAAUAAsBMJQBOjXAAWhDgXKYAAMsk2vFmPRsAJDm3ctovlCKqFI3wvZMhFzJJAAA=",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAsBMJagCdADze7hYAP5b+SYHp/2Ke8ROrTl9uHbhJQR1fIxyJnDB1LkQNkHea7WS6wWAAA==",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAUAAsBMJbACdLoAArdzHeAA/pl2mStR7voA3ZAd+C8lASTQkBbZ3A3/jLSGAm8af6ZlpCiAA4AA",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAUAAsBMJYwCdAEO92RQAMtP6gur1UOzwn2Lk5eJuwMAAAA=",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJQBOgCPw4gT4OAD+Sdqb9skKJcy8XOzLitf3edr57liCEE0zkAAA",
  },
  {
    folder: "33-septiembre-2020-fuji-c200-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJYgCdADze7UQAMtMY6LUx6nVxfQkKcd9s6gC2BWTwaZMi9UTkAAA",
  },
  {
    folder: "34-septiembre-2020-fuji-c200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAsBMJQBOgCPtvfdpYAD43KqKbkUbGqU9Ko2gaCm2L3rlUSRho1gy22CAAAA=",
  },
  {
    folder: "34-septiembre-2020-fuji-c200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAwAAsBMJYgCdAERGtyDnQAA/vcbhxgWVf3yBzS8opy/w+B6odsMDQuEMJKzbEHwv0X+AAA=",
  },
  {
    folder: "34-septiembre-2020-fuji-c200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAsBMJZACdAEOaFpGgAD8j/htbj3zmFBkvue95s6EFwZV8u40OmvYZ0pnmT9L1XAPQ/YEHu3QAAA=",
  },
  {
    folder: "34-septiembre-2020-fuji-c200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJQBOgCBuYxnAAP7vrcXE3uND76lcmeaVh7weY5dAIbKRGt7al++38EAAAA==",
  },
  {
    folder: "34-septiembre-2020-fuji-c200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJZgCdAEOZ/JwAAD+1irtW2YTq6adh5oaUIyHB5C07uF9eRUwdbtFGeEOCN74AAA=",
  },
  {
    folder: "34-septiembre-2020-fuji-c200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADwAQCdASoIAAUAAsBMJYwCdAEO9f7SVAAA/mq1ECVY+isPBs9SSJ9cq2jBrYgIAAA=",
  },
  {
    folder: "34-septiembre-2020-fuji-c200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJagCdAEUlDrwAADiB+dNUQ7zRsKdA0TZxS8EJSAeDZVOmSZ92dtC09awAAAA",
  },
  {
    folder: "34-septiembre-2020-fuji-c200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJYgCdAD0l+jNAAD+T9xdyH+I9vvh3iOIFOTUW1XexvK2Nlj0ZtGucQ8rAAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJYgCdAD0Ma2oAP3jvRkVXbf5NOtVcWguL6m1wtrhqE30LAAAAA==",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAUAAsBMJYgCdAD0bSdGAAD45fzi9ieblsO5KOhODZIps4MNAAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJZgCdAEfawi/QAD9/T+iFk3OBu9LEePaJBBSOZqZPdh+lmc3ZCJpkFpSwAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJZACdAEO/dXAAM42uoB6XWQAGIHpciAO1IWQk6Rzn5t5Gv1rZ2rY/AAAAA==",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAwAAsBMJQBOgCHPDLLoAAD+8BvlmniZPsQnj8NExfAK/j1+1huJbtBenap8YSTw8NCB5xZS2dMEPl70sqQdkYFLkAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoIAAUAAsBMJQBOgCKUgOskoAD5QtQeNw1iJUmeeGOkrFwnG1EAAA==",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJYwCdAEOZ0BAAP39P6kTDHoBaNk48FCXcrX1KRihqpQAAAA=",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJYwCdAEfaT0sAAD+4NutyRdO+rwXhR1oVLPgZ/Pr+HygM2APAAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAUAAsBMJYwCdAEO+M3dAADiB/GC/AMscAmguPtqHCMNAfYzwAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJZgCdADze7UQAOIGT2uih4cBmglHPmGopHGIEwTJ7D9lAOxBOVetE5QAAA==",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoIAAUAAsBMJYwCdAEO+Lo3AAD33/rytofD9vSBFwF8FQAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJQBOgB6QNkwAAP3jv49+zVa6n5XtPAL+BZFryxBFEx35TiMmKAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJZACdAEOZ/HeAP7Xnuo47/O+yo+74BgaJb0UtHdxpnm38vNC/JrlozXi1fgAAAA=",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAsBMJZgCdAEUnwBKAAD+662v8Pd/VQ4iZ+yqKsNlhbiptP0XjdXdOK/UEYsxHQoe2anUIAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJZACdAEXe4XRcAD3395FXufP5jxK6rGlxFlju4cszhrxwVZL8gAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "16.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJQBOgCPtYajMAP6aEstiF+T2dXpoK+JPhl6kbdTEe5aKQ5N2BgAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "17.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJYgCdADze7UQAOJ6SrC2bUAouq5VZE3b1MLfEsdbZOdgXDJmmqgAAAA=",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "18.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJZgCdAEUnc1tgAD+xgWTflD0g1WYJQpBGzkOFpjFxTvRfx09oCAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "19.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJYgCdAEPBFNuwAD+4AmoTi19s3/tay19xJAuXvS1yARV6vQ0AAAA",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "20.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJQBOgCHXYJAAAP7HbBrj83IIkFuM/RMVZdSRhNJOZV/fNAAAAA==",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "21.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJQBOgCHgim3YAP6yPaWfpTSt+guQeXfQm2LjCasC7KvV5XAAAA==",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "22.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAUAAsBMJYgCdAEPAQEwQAD8aDzg4urQDBFgE6hyvnuWqTJwZbbBAAA=",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "23.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJYgCdADze7UQAP6VD4eP3OXoRctekDZSgzXju5rqIot3uWrOrM8ufIgAAA==",
  },
  {
    folder: "35-febrero-julio-2021-fuji-c200-website",
    file: "24.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJQBOgB6SuDaAAP7Xn7BdP422+jGhlLpBUVBtz8rPCUl0uQvwghQAAAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJYwCdAD0bVroAP7XnPPHDjD+ORkaLRsTcnhkmLdOWnV8AAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAAAQAgCdASoIAAUAAsBMJagCdLoAAwkPghmAAPyz3H+rUvUbQSTufY/XeLUB+mpe3Yu4BC9mAAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoIAAUAAsBMJbACdEf/gedlChwA/uDbNohyxNqm3eIkigFZyA1/JfgGXvtOhrJVjxZgGZJ5EZqY8i16oAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJagCdAEOOWMAAP7ts6KJWNnGYdBsVi+FjXxPVk4uWje6In7PF33zAAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoIAAUAAsBMJbACdLoAAwkGvzAA/q0mUS6Cux8jyITLiHPXb+LEFbKKLp2/1difCgsAAA==",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJagCdAEOO/CwAPwfziIENSEVH3Zj0ejRj+6OIL7sU7lqd8Gv5ztWx9dgAA==",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJZACdAEOZ/HeAP6bH1vh0pBeZ9Zg/WyBudph5UuWiGBVgAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADwAQCdASoIAAUAAsBMJZQCdAEO9W31IAAA/u3htnQhmMMDznPO9+Ijnh9UAAAA",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAsBMJZgCdAEOlli3gAD+W/8f+RgzlcP+ECvxzkqvsi+kAki3iXAnPWLyOtkpsGhoYsnXAAAA",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJQBOgB5vdqIAAP7nrwWWY4BfzZS5/yCt9uqfv+kYKhK8zeT4dZ1s1TDkAAAA",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJQBOgCHM/jvAAP5b+VLf3yrvnxwyjT54M2a2+mGlAw0ahhfG82JAAAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJQBOgB6WdiGAAP7qSddeh6Kg6B/Ao371U1ujx/fxEthhME4/IcgAAAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJbACdADx+IsgAPlwvMXE0J6zmzv2eyKQvCF/9ChOHn7RTLNjfm7sfyHIAAAA",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACQAQCdASoIAAUAAsBMJQBOgBtj5xAA/kUzYdQe2B57UvzfNqE/k8DspNVhyahhex7XAAAA",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJaACdAD0fSPiEAD+mYWPou1eksaflU4WsC6eXzWOC/EzsPfZWbndanZFYdlAAAA=",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "16.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAQAgCdASoIAAUAAsBMJZgCdGuAAt0aK/wAAPzyxN+eRuv96cm2rheRzi+4mSgp7SelT6aqAnVg6AAA",
  },
  {
    folder: "36-julio-2021-fuji-superia-400-website",
    file: "17.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJQBOgCHM+SOAAP6YX1yL3Ckc7+myJ0/6ODogzYY+hv2cQAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAUAAsBMJaACdEf/gfOTZeAA/uAL0SQ0PeDUPIn0dYSY/qq39h9WMWhOFKfAAAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAsBMJagCdAEOsVpAAP7oorgDqfy+PnjY6epygmGYUGjtWRAnZ0Ps1v6A0U5PyF6IXMAAAA==",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAsBMJbACdAEef/xCwAD+7mrTgGNmAEgXN8fxJHktN49bAV9vEHni7b2ZX97rt1ZF6jzwAAAA",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAsBMJQBOgCPtlr264AD+4nFSRDN73CBFBaeiTgCWTI4VJWd7HJEUQWHgAAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAUAAsBMJbACdGuAAswRLCQA/ugy1XECNlpWMpTUwxW3ozOSAML58RjN9ECgYAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAsBMJZgCdAEOZ/JwAAD+x4C3xv9QOIAkPNbVbq2nxA7QLNakAqjmZuGzwAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAUAAsBMJZQC7AEOZ8kcAP7rqS40knE/xnO2ceFLTagQAAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoIAAUAAsBMJZQCdAEO9f6gYAD+yP/h93vbAQ9natIJq0wAAAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAsBMJZACdAEUmfdOAAD+bJ+7vqQ+TZRNCbEF2TDBhO08VKeEPuRLmItQAAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAsBMJYgAAveCftRJAAD+m99oyzvFIcEXbh32cpAKD6d2HRkiAoAAAA==",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJZACdAEOZ/HeAPwjGLZIe/CQcxKyvA3wATUk2Dl5mbiYCyLgAA==",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoIAAUAAsBMJQBOgB5P3tAA/Dro78WIHPa8eGAlj8Bv+G4CBnCVPCVKdsr0N2GAAAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJYgCdAD0jJ6a4AD8//7bEuTxRMEPdq15txpAU0aMtJq0tArnwAAA",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJZQAAxZgo9D8AAD9xqM7nmWc7fTORxMX9H/wOg1f2xf0UmpphcAA",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAUAAsBMJZQCdAEfaw1GYADiepqnA+RaEkl6GMl5fvJsFAwme0AAAAA=",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "16.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoIAAUAAsBMJYwCdAEOunBsAAD+x4P1QjsiFcx/76tCV3nt3MAAAA==",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "17.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJZACdAEOPB2+AAD9wxLMwoWiM/+58CtPgsJbsNygsyMKCcIxh2JerAAAAA==",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "18.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJQBOgB5vdzEAAPqcZkYifW6eN/8zquZPXYHi5e5zgkmQewyAAA==",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "19.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJZACdAEOuwSAAPlSp000sXFAzwHQUII59crCLV5M5kYD/UqObIiZXKxxiAAA",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "20.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAsBMJZQCsAD0lcG0AAD2oOL5Bm9SC1O7BtoyZnh1UG3eEn5nwH3AAA==",
  },
  {
    folder: "37-julio-2021-kodak-portra-400-website",
    file: "21.webp",
    base64:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAwAAsBMJQBOgCHNBD0iAAD78+i55e1nhXOd74qH3fyOteqx1XoZ2SMzYppJlR6k5MTAaFII1BymOaD1Mp3ijI7JgAAA",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJZACdAEUlDspwAD+th/DD/wjN5XFPYoFRLJncfIN/NOHsqXs2bps8lflRrdAAAA=",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJQBOgCLviVTLAAD+wqz7Si+47tpHbdqOHIjlO9ZhD2p1vFTHxqIvayHjE9EAAAA=",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAUAAsBMJYwCdAEOuwSAAP39PofOhqtes2ys05jon2Pa4AA=",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoIAAUAAsBMJZQCdEf/gedkMKgA+T/h9lz7hsUMiLsAGgzBQe9H60qOQEZUjgAA",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJQBOgCKT4AlAAPzYsJ32NYuWAJRYyjluAE69U4WQbNRutrJ8AAAA",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAsBMJQBOgCPtkSR7AAD+6l6YG1Y90fS1qHpH0Ot8+5CgCdIdZsaUm9SobPfbs3T2wAAAAA==",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAQAgCdASoIAAUAAsBMJZACdH8AGBuIZfrAAMtOxBzXStirgK/Bzuc/FEsS5OhFGfhE14Vx0BDytQAA",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAUAAsBMJZACdH8AGZLDBQ4AzaaKzc9/FPrWBXUuc/Xxh447W/jLbpdUzuxOUAA=",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAUAAsBMJQBOgCHgbHxIAAD+o39mQvrSec1WKeOhQ9y0UisCStWYQAA=",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJYgCdAD0jPTOgADiUH1jEwocwTS+7tkpU4EG0nxwKaW0grRruk/Wl2gAAA==",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJYgCdAEWTcteAAD+BvjadyEoR85j32Xs+WAc6FsbDkzsIWHYDV+g13pSiAAA",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "16.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAsBMJQBOgB5P3tAA9kN6K52+8/zr3uU7KmhiJj0aalXq9DQAAAA=",
  },
  {
    folder: "38-agosto-2021-kodak-ektar-100-website",
    file: "18.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAsBMJQBOgCHM5ugA/kBzX0JNq/Iq55oEZt2rK/N3tNastPsSAAA=",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAUAAsBMJaQAApworfgA/lW4Fr+vKzW15lhJAIkxGkrt+AAAAA==",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAsBMJaQAAqrjhtYAAP5gKk9Qf0ngW5M14IM2ksuyQAAAAA==",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAUAAsBMJaQAApplHeAA/I/GMQn+Pr/w5p7AX+QRKpHRAAAAAA==",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAsBMJaQAAuUve0AA/sBz9K8ljyIlJGvj2s5bR+m2LUn0rTxAAAA=",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoIAAUAAsBMJaQAAp1UjCgAAP7tJsBplqIqjRA/b5wx+7K3M9SzAAAA",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoIAAUAAsBMJaQAAuUve0AA9qi2f7BniQXvtX2y/tuRAAAA",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAUAAsBMJaQAAppipUAA/eO98BJm8J3/qSZ9V1pu2JU8nYgAAA==",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAUAAsBMJaQAAvd7j2NAAP7VF+IVB8vBzOGgI24gAAAA",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAsBMJaQAApZCFgAA4n+TsbH0mpSbRwT4wuQLjzsrbdjyrzwAAAA=",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoIAAUAAsBMJaQAApplHeAA/tKVkUIRvzdO0uNO8Zw+Hrut2Pjay/fa8gAAAA==",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAsBMJaQAApexCwAA/u0gIGJdP5XdwTeSBkDR8K86k3DY+YZgAAA=",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAsBMJaQAApplHeAA/DZekK9t9o5yemoDdumNF9axgOm8xlgAAAA=",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAsBMJaQAAuWt2ogA9mDS7rqHhOio1sLxOxxh9vXn/dbAAAAA",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJaQAAwF8SURAAP7tKpFS0Yu0191HgLIQLp90XWoX/KuAAAA=",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "16.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAsBMJaQAAp1HI1AA/repE2/WoGsu6SFo6i0fwWxZCwBUAAAA",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "17.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJaQAAvxOxCDgAP7oqJZe8/PAsTooh6o7eL3fA8XwH8IG2gAAAA==",
  },
  {
    folder: "39-septiembre-2021-ilford-xp2-400-website",
    file: "20.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJaQAAsaVavQAAP7ijGwK2Spdmi13faBqgJSczK54oQlbU4AAAA==",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAABQAgCdASoIAAUAAsBMJagCdEcAZIAC4gh72TgAzj645sgeVA06Qng0F5Mm50it/B86ZPr18Rmpn/VMzdC69GwRkBJDTIAA",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoIAAUAAsBMJagCdGuAAuGRfSyAAP7oq0NSNchibWA7/mEc0yKDjf8uS5kxIohJOvHDQV0HYIDdeMVkAAAAAA==",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoIAAUAAsBMJaACdEf/gfhUNRcAAP6YVtr5+cHqUlyl9Rtce/UgdIMVwIaSuBKTJ+VJhVmH/ddW4FQAAAA=",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAsBMJZgCdAD0Z+H0AAD++BzGgw9wXsgGmq9bZP16VPuF96g4OgAAAA==",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAUAAsBMJbACdLoAArSdjUAA/soKjDZFGQ+OAMz6X6Gwa6JJg0LslBenz1g1eRcoZ8fBji/BAAAA",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAwAAsBMJagCdAEO4b1haAAA/I5R624ZfbHW7jE/Lchz6q+TSyBRSZ+ngZ+kYj1hfcHPdgAAAA==",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJaACdADze7UQAP5M1kVLq7ew8udwWk9l7i74m+Hzh3Z52gXWuVtndgAAAA==",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAUAAsBMJagCdLoAAsjjhOAA+V1ID2kG4tmdWRgXtieTfQp9nDg9+SUKIADgAAA=",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAsBMJagCdLoAAwfRj7wAzjlY9dDniciKDybXQuNbw+4bp+e96B3dZNH5Ulx7Df4PAAA=",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJYgCdAEef52oAAD+zfiZqIlZEpIVd+ncsUSJuiMChMOa4ubIijVlqMiGAAAA",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoIAAUAAsBMJZACdAEOuwSAAP70+fjt0wBaxbFBI63FJaM6FL0p9EAA",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAsBMJagCdLoAAwbE+0AA/urzrI6uaTtGyNxMRfuHffy+ftEx3fy7Sg7AX8eWefgAAAA=",
  },
  {
    folder: "40-octubre-2021-kodak-pro-image-100-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAUAAsBMJagCdADzesxgAPa3z/auLHtEoKiw6NRY+I7El814UDVedQKBI1cskBofJ+5/ZUl2DpgAAAA=",
  },
  {
    folder: "41-mayo-2022-ilford-delta-3200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAUAAsBMJaQAAvxVRowAAP728tKXr4wqoSCoPA6oaPwAAAA=",
  },
  {
    folder: "41-mayo-2022-ilford-delta-3200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAsBMJaQAAxeTmE4AAP4HtxGjPx0+GKWrTDNDqO2VeQAAAA==",
  },
  {
    folder: "41-mayo-2022-ilford-delta-3200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAUAAsBMJaQAApplHeAA/vaXCM3Gk7JhANqQ3GnTUl2CBAAAAA==",
  },
  {
    folder: "41-mayo-2022-ilford-delta-3200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoIAAUAAsBMJaQAAsem0CAA/vbzSbIK1JXpOdPmXv7KEiOv7MRnKlCnHAAAAA==",
  },
  {
    folder: "41-mayo-2022-ilford-delta-3200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACQAQCdASoIAAUAAsBMJaQAAp0f6QAA/u0o2HPmzUwNlw3D2gAAAA==",
  },
  {
    folder: "41-mayo-2022-ilford-delta-3200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAUAAsBMJaQAAud0bHcAAP70M+lzzsRL7uLgfW2AAAAA",
  },
  {
    folder: "41-mayo-2022-ilford-delta-3200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAwAAsBMJaQAAp1eJjJIAP6jf9wJ7xhq3ptW5qdbVtdQCD00zq/HY7FQAAAA",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAUAAsBMJbACdADze7hYAPua1wwyQnyTnbGumKBMP7mXgGj/39QicJj3bf/k2bZeHtwf9PAy+QmgAAA=",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJZACdADcEV8sAP7KsUw6p21ai3/1TohaZM4tMRsHPCVBOZsDWu+PAzwe/SZIAAA=",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADQAQCdASoIAAUAAsBMJbACdAEO94EngAD+a/XQA4Qz8eNHNpLmsCOmVRMZP1EWH/jxi77I5/0+oK6fVUiyn5vAAAA=",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJYgCdAEfgw1wAAD+ymwGKEYhzxrzVjUdJ99CfsfOHefmbLuurLC9UQAAAA==",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJQBOgCKSh2igAPyP/n9CfCUyrYJo9fdDbkwputsVfwRNMgtKWAAA",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJQBOgB5t0WgAAP7KA35N7nDD0EXDlZHQUGYzFrcwqDLbT4AAAA==",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJYgCdAD0MYo0AOJ5xg4P69z8y4mjHLasMxJx5ar6ER0XJLS69t6VTkp0pAAA",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJaACdAD0Ma2oAP7SbZp2E9o60+CZ3dDzpAyj2cVE8Ohz87EfnNwnwv0QaUgAAAA=",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAsBMJagCdAEfaw1GYAD+3P/XIu8787t8gX5IbExrbPGV6M8P8TsP2UA9Aqlrqy87t9QAAA==",
  },
  {
    folder: "42-junio-2022-kodak-gold-200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAUAAsBMJagCdLoAArdwkcAA/vNS2QTOCMSudvWwbrR47bnXjOhWyRSDC+vuw9ibNV8HC9d4lQAA",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJbACdAEPAQE7YAD9AM8croJ7JwwfbIpDgigy3w/fe6H9uO/9OQP15qmygTzQAAA=",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJQBOgCHM/jvAAP7WK/cPzzXLitaDLUUE5voPN9gIxGRho1iaZBaUsAAAAA==",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAsBMJZgCdAEOZ9IoAADLT7I7rTBo1TeHVclTdZ7Kkp8l7lqkCe7PYjjFAAA=",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADwAQCdASoIAAwAAsBMJbACdAD0sluRvQAA/pa5faCFgYLICg2xBTh+FgfOPRT2fM+xT1QXairuBkzQplMOCoz+aqp6/G78lXAp7Zyl5WCIAA==",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJYgCdAEOuwSAAPZH25cyd7bgOSpiaqO1NyOF+jG0+iAAAAA=",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoIAAUAAsBMJagCdLoAAwbE+0AA9kdAjO9+Ml4o96sFUBl818QMm/auUmMtAkmTnOAAAA==",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJagCdAEOZ/JwAAD9470b1EniLV/UqgexWP+7hsDE1v4bzEDpzl8p6tsGe++YAAA=",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAAAQAgCdASoIAAUAAsBMJZACdLoAAwjv/IogAOIHrlUkfvnczR6W3+ovJfj1sqsU/kjGxmE9XEAAAA==",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAsBMJZgCdAEOjhSoAP5oyRBZ23asGI5exzzkXatkMbQUgy4ji4fd1Ql05y71aQiLbCoAAA==",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAsBMJYgCdAEO2pOZYAD+kb92jCuVHimZqkaC4k4an4aV11mhB5dOYmsE64ZE9hdDn0QAAA==",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADwAQCdASoIAAUAAsBMJZQCdH8AFchZRwAA9py+LxpAvZu5Q1qlayOqDt2OdPbQgAA=",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJYgCdADyfvaAAP6t3wN19WCD3svkR+oUtqbD/CfjBpsMYVvI1ZvH9zsoAAAA",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "16.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJZACdAD0Ma4oAAD8jB5U2I9BzdFU2MuIGgniXMuDf1SALRRzyO4EDIuAAA==",
  },
  {
    folder: "43-junio-2022-kodak-gold-200-website",
    file: "17.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAUAAsBMJagCdAEWUMJwmgAA/pG+S59ZnayWooy51po2f8eVWuqkj2H6WZ51o/KerRdRcgAAAA==",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJZgCdAEOZ/JwAAD82X8OeLR+JKaVjZGvjxw7u6evHDQx0RbYakAA",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAsBMJaACdAEOZ8nvAAD8MPABSj/uArgNdcPcD0UvOQ41O/O/sTwtbZP16V4sTUyg4PbgAA==",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJYgCdAD0gwUMAAD+3gMA00mETuZrZTNpAqmuxyNVV0/IqCWmNKpycqlswkGAAAA=",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJaACdAEOuwSAAPyP/TzCJpvoVIU7h6qneFQK843PloDddjvkN1YlH/JV6bSQAAA=",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJYwCdADyfvaAAP7qXeI7/361Iunst3v5uM5/r2cXUfCyyfo6o8g8AAA=",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoIAAUAAsBMJZgCdADzesxgAP7yjNr842fiS/sPuWZ8M/7Y1/i2CT/xyPDVML8SsYUuGYq6FqUTepoAAAA=",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJZgCdAD0lcHhIAD+wP1TiqON7/z7opRdYCKiLFHh18O7m2DYn3ArUTt8F8IAAAA=",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJQBOgB5vdqIAAP7Qp4lpLLDntEZFtuaiuiN5ua2e5aKQ5N2BgAAA",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJagCdADze7UQAP3jvfQYezXimOoeq1FTp8n5uN0+dicH9yfs+BJWq/AAAA==",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAQAgCdASoIAAUAAsBMJagCdLoAAxntpN8AAP7j4OlGyT6Gp51LMahTfia8bwvDl25jbfku87a6OwAA",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJQBOgCICQgXGgAD7pf5P9owsjyLiZYwmBVz678dYZyRTaNNhhE3+YaAAAA==",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoIAAUAAsBMJQBOgBuoVj2AAP7KutUU7I/2HV71wp94J5C6f+6SMjD22rQqQrB+WJgg4aNQwvY9rgAA",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADwAQCdASoIAAUAAsBMJZACdAD5hNtejwAA/GTEZ0WwgI5ctMjNuWJrr1pbNy73Z2ioDAAA",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJQBOgCHgfUg4AP7SuWiHmGQ45jeTwHC2JMVD3pa46sBAAAA=",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJaACdAEOZ8m4AAD+6yeR6hVRcsqYqu1XuGTu1trnsSVbu9v/26HJmAhyLgAA",
  },
  {
    folder: "44-junio-2022-kodak-gold-200-website",
    file: "16.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAsBMJYgCdADze7UQAP7Yd24biCSw9hqgVadW5ojabjtnhxDeWyEV2GXlkYzZdbUv4ONAAA==",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJZACdAEegKlHeAD+6KjEN5A+272mW4S0LXeRGls7oi4wmq+Q3pds8iGAAA==",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAsBMJYwCdAEQD1MewAD+7bNZGq3iA+5vJhykds/Xjiqd8NFo6J+OSpyAAAA=",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAsBMJQBOgCLae3CCiAAA/sqz57+XDPNQuwc2moXpj5NbB53eIyfnCfIw1upV6vK4AAA=",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJZQCdADx9FgAAPul+WPvmcSA+QKpl28AqS3njxNl3eog7ALAAA==",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACQAQCdASoIAAUAAsBMJQAAUvYnOgAA+p/fi6joZwA92nAqBy2CW+ogc8y8S9/ujn8nwAAA",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAsBMJbACdAD0jPAAwAD8H2RnCsne4EqelQ6/RPBBZIQXUAE9GE0k6Ptvd82eLwp8XclAAA==",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAUAAsBMJZgCdAEWULf0hEAA/bblgD740b3L6wCEKOU6Ek8qmw8YsPD5PvS6mnGSQAAA",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJYgCdADyfvaAAP7eIQk86dZ2kc0dU15t07ZrnKRfb5ktsQ6S2UCf4AAAAA==",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJagCdAED/MmugAD+7mYOB1CEhtA5C0NpVKxjtZbA/cGgWQMOv23yC+pUBUAA",
  },
  {
    folder: "45-julio-2022-kodak-gold-200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJZQCdAEOZ/HeAP7c/NLn7l/nKAdcl89jz1gU/OKvXZwx8VY0jbUAAAA=",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACQAQCdASoIAAUAAsBMJaQAAuab25AA/uestJR7J8eWik1aAAAAAA==",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoIAAUAAsBMJaQAAuabAYAA/vOq/DsWYnFGWF6/D3r0AAAA",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAUAAsBMJaQAAuWt2ogA/uHvlWTxKS3xbj++ED/Zj0HD5cwAAA==",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAsBMJaQAAlyrHv0AAP5AhIm9Wu9Qm/pA3cRukk2sgAAAAA==",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoIAAUAAsBMJaQAAlmb4h8AAP5OqlpxWyWlO1J0YcpmPjx27v4AAAAA",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJaQAAxZQtGgAAP4LRUuitPg0f/7QozOEuBZqXfz7tjAAAAA=",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoIAAUAAsBMJaQAAuabAYAA/sYHGu+5hbWmgd2smb4gAAAA",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJaQAAvrd2r8AAP7vrYzvRKUP1Wq6aCK/LPc3xQaGgVDAAAA=",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoIAAUAAsBMJaQAApexCwAA/t47Qen+I4NmWrlXPScp69ZpXuyEYP18O1QAAA==",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAsBMJaQAAqrjhtYAAM3xq8xIKVWxixG6LdaHoCpgoAAAAA==",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAUAAsBMJaQAAudGFIAA/sBgbuoHL6ekDBr6w1e1V4slEMAAAA==",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoIAAUAAsBMJaQAAxaiDAtAAAD+xgQzQFcev0M4eBbAqQAA",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACwAQCdASoIAAUAAsBMJaQAAp1yiAQAAP6Do0yGsoYFqM6zZQAAAA==",
  },
  {
    folder: "48-agosto-2022-ilford-xp2-400-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACQAQCdASoIAAUAAsBMJaQAAuWs1FgA/u4/uLCltVDiFBF/VfZE+ffKN7AAAA==",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAsBMJaQAApez2+AA/rP6OvNfZ4dvCoaQMQMEzxCqE/13QAAA",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACwAQCdASoIAAUAAsBMJaQAAubl4G0AAP7I/n6Toa/C44AAAAA=",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAsBMJaQAApyT8qnAAP5J2isTBjcB0xOpEsfa+3kKAAAAAA==",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAsBMJaQAAudZOxAA/eO930RTd1Yn53kzlTuCC8vquKqtwAAA",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAUAAsBMJaQAAxPA6KPuAAD+6ydtf4dw/8f41fYS5zqHX3H9NQAA",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACQAQCdASoIAAUAAsBMJaQAAuab25AA/u2OjsZsPONwKIjCvcTEIWgAAAA=",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoIAAUAAsBMJaQAAlJ6bAAA/sdVAV+mJhFkRTNUAAA=",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAwAAsBMJaQAAudxwIDKAAD+9RCnSe+neTJCDhVpd4fC9rCgAlhWo6V1AuGKAAA=",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACQAQCdASoIAAUAAsBMJaQAApplHeAA/vCvwuGXIqHqX0bZ+uJtYELwirmXhVQAAAA=",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoIAAUAAsBMJaQAAlJ6bAAA/uUFBFcS+uJyvGy/gFPjLIAA",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAsBMJaQAAp1HI1AA/uJ8d1WRWJvOjBzSXWenCj/3HpWHwAAA",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAsBMJaQAApxXsVAAzj6l2Lp2ObeDFLDjbb5QNg5g6S4/wAAA",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACQAQCdASoIAAUAAsBMJaQAApplHeAA/NUUWSbYNtCvgjC4EZR1/mJ+73WAAAAA",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "17.webp",
    base64:
      "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAUAAsBMJaQAAveCfsUIAP6jdpZlNfiBAdbijMbikAAA",
  },
  {
    folder: "50-agosto-2022-ilford-xp2-400-website",
    file: "18.webp",
    base64:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACwAQCdASoIAAUAAsBMJaQAAqrjdeQAAP7mz3CPc3pxFLawQGWhuJs02nh+oAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAsBMJQBOkBsjMqXL00AA/pjERQ0l1yVY6s5CdeRtGM+GPpBJGhtFRh/zci4ShlHrAAA=",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoIAAUAAsBMJbACdAD0eqnsAP7dUGt66X9X6p336A4PfQeRq/nJrHHzAg/BhQyXT/41uv38cbFISwAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAUAAsBMJbACdAEXfIsumgAA/vKF9KXZANf2qwgHiWOVM6vZXgT8Gc740vDl8qq7QGaPYMqAAA==",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAUAAsBMJQBOjXAAWHLr7IAA/sUcI0fooxqNDAP5ebDW6sdEbwjvbuL2/4FGKLPbgAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAUAAsBMJbACdLoAArdnzEAA/t4vozH8BPvk0xN1KzAHM4lCWP0f8PGpFEZriml/rCsIGD5YAA==",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAsBMJaACdAED/YYeCAD+8Kavfd9dIc0PlQoSEQ/FZYZucgcny2zlmcK9l+bdr+Hx7IbrYAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJYgCdAEO9f6gYAD+151EvtDIFJX2ApKdkqiHi4x85OMJzoImOormEXqBgAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoIAAwAAsBMJagCdLoAAwgbF2IAAP6RvlFhXTXUE9gvWraDlaP7BuztUGieq97vRhl8WfxaOQOjngJ/imIxXeFxsZhPoAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAwAAsBMJZACdAEPDzccAAD+W/6xtkjHE+yhrhxFKZ8KbVSKLIbwdrs+evpypu6CfAkrVmEAAA==",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACQAQCdASoIAAwAAsBMJaACdAEOV9AA/rQv1ci+vzRnsey5cZgbTfiSrELOJXisnVo80wi4siG+HW3yChsJOuOw1LWAAA==",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADwAQCdASoIAAwAAsBMJZACdAEQEmk+ZAAA/rI/h3912aTVv5uqI6yi2I7yQcJb23W2nEdyYXMY0PFc/vb4hbup3qo7GbWF+jGx0dPAAAA=",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAUAAsBMJZgCdAEegkW4caAA/uhtdD0739O83DDEjfQyqmLI81N3xSQJ12lT7hkToXmcHQAAAA==",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAABQAgCdASoIAAUAAsBMJbACdLoBJgAL6c+nE4AA/vBNFTzlKG86YYMgCIh0UmyM1czi8mVrH89ejUa6WKcAAA==",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJZACdADZkPFAAP6xajXJElUfvuwR+gIuol4RM7gNmpLPD/pXvXDkGJarsAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJZgCdADze7UQAP7FxhXYVwwRLclM0cympCulrQXD7vE1ygBhH+bN01ENlAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "16.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoIAAUAAsBMJYgCdAEegl1pcgAA/kkQoeoRYYb61YsysjpO34RG6+fHycz9uldvoK1ugAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "17.webp",
    base64:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoIAAUAAsBMJbACdLoAArdzJwAA/gm/DlwqGro/f2mWJst7OIKisHfJ7Wn3AJ7ETUiEkWHgom8H1/xgMMAAAA==",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "18.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJYgCdADzesxgAPkQS1opAL8mpNviLQ1b/MGP6MgpBjHcZBt266Ta3GkkkxSQAAA=",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "19.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJaACdAEfbfw3wAD5cPS3gZgxSkOnJ6pWGZd6nafcOWZwr2X5HYSdbBDHgAAA",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "21.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoIAAUAAsBMJaACdLoAArMaFgAA/ppsN0xBlRFl2tTWRwvLyh/nV0f9Ef/h/fytvL+KOP3W7e9AAA==",
  },
  {
    folder: "52-septiembre-2022-kodak-gold-200-website",
    file: "22.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJaACdAD5isJpAAD8Nvn3iCwJPR9p+uksNiIb2lYRmbzbyNfjd9RZnv16IxkAAAA=",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJQBOgCHElCwAAPyP6xIogH0W3SjppePo/qsiFDCLYasSyO8AAA==",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADQAQCdASoIAAUAAsBMJZACdAEO+zNNAAD87x++n0SR7nupRSxUuCD7TdurP7koQarIMVEWwvxsIOLNaD7cAAAA",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJZgCdADzesxgAPKm1EEtOmh6bXuRdeHggvf+/U8B4CGjxyhlACJfXqmlPnqAAAA=",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAwAgCdASoIAAwAAsBMJagCdAYrJkyelJUSeAD+68APwsb6R1pM3wAke+ALujIVl/5d75mhWmKdDSgdqy5ZmmZsdpXDcV/cQQmvnQRNcjEZ3mWVdoqAAA==",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJZACdAEOtMAAAP6VDohV59VdOmJnABhhuw9+GQ3atQejSp9wyJ7C6HPogAAA",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAQAgCdASoIAAUAAsBMJZACdEf/ggbxnTzgAP5VKVbUTBs3wIVzekGSRlAKq5iSPxutarWX9M/+GKAAAAA=",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJagCdADze7UQAP6T0/NEI/phQtzI11kVx9FNPhhtdLVIr2bqyhCek48AAA==",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJYgCdADzesjgAOJ99XbSYQ/zeN84Le4cx2fPeqEmjpOHLM4V7L4ElaswgAAA",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoIAAwAAsBMJYgCdAEf+TIhY70AAPpDs0Egqij43hQUlFTBytV5vSuZcvtgZuQ4O/SpW+eSfTHxEVwR8pDq5bp5/WIzU0GBri/5S3imoLHAAA==",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAUAAsBMJYgCdAEfaTzWAAD+WJYjhKurhmNE+xwQLZDmpJJsQ3JN1B6Dd8v5TsMdicoAAAA=",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJZgCdADze7UQAPzRJ0G4DyeKEuAoiYepTOeQbhzKUXsvrRmQfxdtFprscqAAAAA=",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJagCdAEOZ/HeAP5hUiRopgubuvO3EXqCUOAZfOxIXzB4i7PynplnfsPAAAAA",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "18.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJZACdAD5ik6qAAD5dx6jT6AL251RwRRu1Fc6XGoZOqqevprgSWGEtHXXAAAA",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "19.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJQBOgB5vdqIAAP7I/fXGb28t5M5a1RLulevRoB04ucK/QtQTkAAA",
  },
  {
    folder: "53-septiembre-2022-kodak-gold-200-website",
    file: "20.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJaACdAEOZ/KjgAD+4lfCxFC+3wjFjJGwfs+GGxE1v4WzY3wCGTZ4ssxOUAAA",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAsBMJQBOgCIBWgvoAAD97ZPIBe/OqfXkDQjY9Xt/DOUMkYaM7ZaKNAAA",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJZQAAub17g2AAP7girRribY+UM1Ez5m50c71B7GyDb0KkOJsCAAA",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACQAQCdASoIAAUAAsBMJQBOgB4/DiAA/vKF+4T36vlzRymhzFFJJbIgR44vwstyVEHipRWTbHhRRPwAAAA=",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJQBOgB5th3oAAP09PyWKdq0fT+eWHBPnOyHvh086sFrenj1+AAAA",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAUAAsBMJQBOgB8xaSGngAD+shM7okqwDxTt3dKfJowmkts12BXJ8AA=",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJYgCdAEOuwSAAP5OjTF/DZWF/P0rcef8wHRyflLyDhMfODZIpjWygGBAAA==",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAUAAsBMJagCdAEWUNWMMwAA/oQfME9X3IvVddjbRmy8eMmeb2QK/Nk8CeOvDvYBzWQH6agYCUAA",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAsBMJYwCdAD0Nu6H4ADyH68SYpHHCpH+EyjRQwHlefQKDPCCqkyMAA==",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAsBMJZACdADze7UQAP6yCk30e5Sti5f8p4ZeW47fbXjhnatj4cAAAA==",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAQAgCdASoIAAwAAsBMJQBOj+ADFHsfp2BAAPfUMSgY3CYEYZ9rBarW/H88zyOpj94mf+mCa0Al4HOVwAA=",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAwAAsBMJZACdAEOulMLgAD+853mHrBRno+mNP6E+60tD4W3Y5fLeFCBzp+mIW2G34sO7d4D/jJPf6AAAA==",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAADwAQCdASoIAAwAAsBMJbACdAEf/NiOrsAA/vl6qdQx5Dqide4+/rPFr4YoxMyzblrCBapTwS+ttMHyOXbBgAAA",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJYgCdAEUnwBKAAD7pck4aak68C/L15EokxJ0Y9/h7pDln61YlrowvPoAAA==",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAsBMJZACdAEO+M37wAD+4j+RVINVOWdW9n3n/Yg3nD5FvBTXZp5Jb26HKCa+JwjD+AAAAA==",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "17.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAwAgCdASoIAAUAAsBMJbACdLoBJgALM9rTQAD+8BvCm9IOmREwrOdb9rfBxh8DN89D2jVw4Z/VLUxtdNnAAAAA",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "18.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAsBMJaACdAEXfr1DfaAA/uht7DbOn5DnPfPzkOR1gv/nJSXq8Mrevf5wv2VJbDwAAAA=",
  },
  {
    folder: "54-septiembre-2022-kodak-gold-200-website",
    file: "19.webp",
    base64:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoIAAwAAsBMJZgCdGuAAs2Xk3AAAP72L3AlTZMbtmM6GuVR00wauvvTqOZ6ZL6y3KtoT3LRnKITrUlaAAAAAA==",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoIAAwAAsBMJbACdAEUmRhwAAD+4AuDhN8ktcc4po7keotpw+YopmOJpRkwPqTY09UEYl08IYSVT+knsRNXKL/E1lkv9aPNPX4AAA==",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJZACdAEOPDDjgAD+x4MtUL7okj3xiP5iCt1Kn6dVEnH8wWy8bP5AufIgAAAA",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoIAAwAAsBMJagCdLoAAmolQyAAyirCGh4XN9pYIUQ49MzUzc+NdSN2qMzjakHdRNfit9TUlKvIyE7MAAA=",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAUAAsBMJagCdLoAArdzHeAA+x5j9dw+3tNcMplXMEZEDlf9Cn2cNNvIyE7MAAA=",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAAAQAgCdASoIAAwAAsBMJbACdAD0oxgBBziAAP6yP8fJiffS7NMK+B9TtKQFe2OiWrZIy8X6cSURN+0qAAA=",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJZACdAEOZ/HeAPlSpuKHFb/znXr5O/yegSC/Qd/gt94iInorAxB6jgMBQAAA",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAUAAsBMJZACdAEfbMtud0AA/uuOx+R7YwvU3vzfyPginZXXSAM82L2GRwISLlnaSWQAAAA=",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJYwCdAD5aeCwAAD9ARqmii3xEgHbOl0mGDlX7Px/xz3+D7FyVYIw0ZyMcAAA",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAABQAgCdASoIAAUAAsBMJbACdLoBJgALdKF4LAAA/mbfRkZsRqL7Tap+XX9gWqhhchKG5h8R3jqpLFH7YwYAAA==",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAABwAgCdASoIAAUAAsBMJagCdLoBJgLf/A9AFbUAAP7tq3r322G1QWI0ISE+OXOciDyLYuhPvMMAzZJFkBAAAA==",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoIAAwAAsBMJZACdAEPEJ8hgq4AAP74uGhezhbsuuRxAlICoLUt0feA9ZBL3Se4hI8O75uE5rnQa0qAAAA=",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAACwAQCdASoIAAUAAsBMJZACdAEOO/CwAP7yFuoPCYWX2VaUGwusnFy0bXVl527BAAA=",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJagCdAEQCTQCwAD82X461BqLHfyIRzOZeZmAy+fq3syS+yx270u5C78jwAAA",
  },
  {
    folder: "55-septiembre-2022-kodak-gold-200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAwAAsBMJYwCdAED6/XBAAD+J6nJQbUUgYHWf0AsIEfm2RNZAalsIqfTwXmEKlzP5o1KDnp8R8U6qUQGR4D8hyAAAA==",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAwAAsBMJQBOgB6HROa5AAD+89BFgyauPrA/0pafTDbYl5nOFv2Wdty8xG3ep4VRedof3A4bvYJiUKz5Dy6AAAA=",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAsBMJagCdAD0cgEQANvf5/sL8x9gDKIv4g+H9qWyPH+vvKHoGKfdmsODoAAAAA==",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADQAQCdASoIAAwAAsBMJaACdAEOubqYyAD+sj7mRzLarep/1fkZNQuSjMvAvxF3ryUqsEFo4FSK/rmnD2VL06aXLFBfmcmXwYOAAA==",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoIAAwAAsBMJQBOgButwEohefQAzj5c1HwdU9N41xUyGJrlD6WPyMkoTBzOY3ZUzVdBDLPDl8SaEohGEyvUfjTBgAA=",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJYgCdAD0MYo0AP3jaMziyNO/Y4puLC45PqUUVri5wHopjfdHP5pAAAA=",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAAAwAgCdASoIAAwAAsBMJYwCdGuAAocbbbHIAAD+z3MyVbRvfBeIr37wrchmtP9RPneyCXp2/Et0tSR0HbgQYRAA",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoIAAUAAsBMJQAAYnepAOoA/fB+iBKQCHgEj9OFGxft+UnPO6N6KZth0+PWJNaAAAA=",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAwAAsBMJYwAAvd7kmn1AAD+9wl0FwRF5IYwvbvvTvaOb8oE04XQrWbSm2h10lEkSnzp3YAAAA==",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAsBMJYwC7AEPCzjiAAD+x4PRMwRyQ3gozyniIMXdE5XpXlFnoFuwAA==",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAAAQAgCdASoIAAwAAsBMJZACdAEfbPfsEoAAAP7zigILP3cS9K/oPD8SKlAYxn8xB81I+QEYGudBQzx9psYGk7DP8eEyhQ6akDD1G/vwrCAAAA==",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACwAQCdASoIAAUAAsBMJbACdADyfvaAAPz93U4so4CXCan8bIamMPTVHy+RX6zbAcJObkjz0tAQQnc8x0oWT2SeoRR3vihueu2gAAAA",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJQBOgCHe7IoAAP4GF5r/6VWufw05wRX/+/VAZpMa54fwr+CJmU8YEAA=",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAsBMJQBOgCHM/jvAAPa5jZDuMVXrM/vL1Z/fz8opn2GkAMI9RncAoXXGIUEugAAA",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAsBMJZgCdAEegKlHeAD+6JQ2Dfc8HGgAeh9AmioazU3r9d/LOb8iDUq9XoaAAA==",
  },
  {
    folder: "56-octubre-2022-kodak-ultramax-400-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoIAAUAAsBMJZgCdH8AFculnh4A/f05jYP85DTMiOSoDBbjXCPpnYwWFw9IabtyjC5/BOkxHD9ZxrCk+RgAAA==",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "01.webp",
    base64:
      "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoIAAUAAsBMJbACdAEO+M3dAADN8/GZZ1re/A3g44YncjfZFBsLtmSXh5ly6FqUTepoAAAA",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "02.webp",
    base64:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAwAAsBMJQBOgCPg10oiAAD+9fC8gjuwJJta1jtu1XHl4Byuwo43zQKOjSbdsrKvAbZDVhhL/rE0yCjlAAAA",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "03.webp",
    base64:
      "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAwAAsBMJbACdAEO/WLT0AD9nX6nATIJYvKCfYsmOzhxd67VO35QK1T7ugzykmWY72coX0XZB8j7s+8To9LgAAA=",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "04.webp",
    base64:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAABQAgCdASoIAAwAAsBMJbACdLoAAxoWbMXUgAAA/kT6fXnWxBvfWkPdjxSkDZW2pXaPHoB+pEAgTvJsD8fJ4xXf4f4e6beRkNvWAAAA",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "05.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAsBMJZgCdAD0Ma2oAP7yci5QSMrX8NK2tMjHggqLllZ5zbzyW9ZUvU2FVUa6gIZawMgAAA==",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "06.webp",
    base64:
      "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAAAQAgCdASoIAAwAAsBMJYgCdAEf3YbsuGuAAP71XOIEUFtlS9/JBonKQx1LNrLI53601GHZfqGWEKcjrBRI18xSIqAAAA==",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "07.webp",
    base64:
      "data:image/webp;base64,UklGRjwAAABXRUJQVlA4IDAAAADQAQCdASoIAAUAAsBMJYwCdAEf/qMQAAD+9OaVtsYNtnEIWB+JOi25P1j1k7DAAAA=",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "08.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJQBOgCKSh14AAP60L+ejuAqsmJJ5Fd40+hi3Edc7DCcjEK0m0iQAAAA=",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "09.webp",
    base64:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAsBMJQBOgCHHg7fAAPzzLTz+V/L1mkYlC6Q8q7N9RocLDCckyWzX2FyAAAA=",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "10.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJYwCdADx+JeAAP6KZ9DXB6c+b47vzHklbOcz4LmLAPMWZSvigh8jDRnZQDAgAAA=",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "11.webp",
    base64:
      "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAQAgCdASoIAAwAAsBMJbACdLoAAnA1D7oAAOIAkCf+GFeEzvWjKVc6fHZMuQRpS3kkmsKhlCIxSbvxBtbnmCdo9k/4rfUDRTd6ULKTMAA=",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "12.webp",
    base64:
      "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAAAQAgCdASoIAAwAAsBMJaACdAEPCAsr1nmgAP27oFvlVi1V3SkR90ldgaRkZPjaU3wmCPpVt/J8xqosrILw73ZmnBdDGP6F8Ttw4AAA",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "13.webp",
    base64:
      "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACwAQCdASoIAAUAAsBMJaACdAEOZ/HeAP7XP+lh35Ur+Q4aKg+uYDBtznuCrwQIvr1pbN6ozttoWfzn6AAAAA==",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "14.webp",
    base64:
      "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAUAAsBMJYgCdAEOZ/HeAP7wi9ydFOQT/2ANL2wOb+dZenNOG9d9ptZBZOjZKZKprswAAAA=",
  },
  {
    folder: "57-octubre-2022-fuji-c200-website",
    file: "15.webp",
    base64:
      "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAACwAQCdASoIAAUAAsBMJYwCdADze7UQAOJnJWL4CKOHoDgXL8+eQ25ifKRG9lx6w0UfIAAA",
  },
];
export default data;
