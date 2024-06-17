const navigation = () => {
  return `<nav>
        <div class="row displayFlex">
            <div class="column column-1 FlexAlign-itemsCenter">
                <a href="home.html" class="header__logoTek4">
                    <img src="../../../public/img/logo.webp" alt="Logo Tek4">
                </a>
                <div class="header__blockSearch FlexAlign-itemsCenter" id="header__blockSearch">
                    <img class="header__blockSearch-logoSearch" id="header__blockSearch-logoSearch"
                        src="../../../public/img/search-default-icon.svg" alt="Search">
                    <input class="header__blockSearch-inputSearch" id="header__blockSearch-inputSearch" readonly
                        placeholder="Tìm kiếm trên TEK4.VN">
                </div>
            </div>
            <div class="column column-2 FlexAlign-itemsCenter">
                <a href="study.html" class="header__coursesAndNews">
                    <img class="logoImage" id="header__logoCourse" src="../../../public/img/course.svg"
                        alt="Course">
                    <div class="header__textStudy displayNone" id="header__textStudy">Học tập</div>
                </a>
                <a href="news.html" class="header__coursesAndNews">
                    <img class="logoImage" id="header__logoNews" src="../../../public/img/news2.svg" alt="News">
                    <div class="header__textNews displayNone" id="header__textNews">Tin tức</div>
                </a>
            </div>
            <div class="column column-3 FlexAlign-itemsCenter">
                <label for="header__imputNavSlip" class="header__blockMenu" id="header__blockMenu">
                    <img class="logoImage" id="header__iconMenu" src="../../../public/img/menu.svg" alt="Menu">
                </label>
                <div class="header__textMenu displayNone" id="header__textMenu">Menu</div>
                <a href="login.html" class="header__loginAndRegister">
                    <span>Đăng nhập/Đăng ký</span>
                </a>
            </div>
        </div>
        <div id="Search" class="displayNone">
            <div class="search">
                <img class="search__imgClose" id="search__imgClose" src="../../../public/img/close-icon.svg"
                    alt="Close">
                <div class="search__blockFrame">
                    <form>
                        <div class="search__blockSearch">
                            <div class="search__blockSearch-sub">
                                <span class="search__iconSearch">
                                    <img src="../../../public/img/search-default-icon.svg" alt="tek4 icon">
                                </span>
                                <input class="search__input" placeholder="Bạn đang tìm kiếm điều gì?" id="search"
                                    type="text" value="">
                            </div>
                        </div>
                        <div class="search__filter">Lọc theo:</div>
                        <div class="search__blockCheckboxAndText colorHex868991">
                            <input class="search__checkbox" type="checkbox" name="khoahoc" id="khoahoc">
                            <label class="search__textNearCheckbox" for="khoahoc">Khóa học</label>
                            <input class="search__checkbox" type="checkbox" name="baiviet" id="baiviet">
                            <label class="search__textNearCheckbox" for="baiviet">Bài viết</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
        <!-- dựa vào việc checked input để tạo hiệu ứng overlay và NavSlip -->
        <input type="checkbox" hidden name="" id="header__imputNavSlip">
        <label for="header__imputNavSlip" class="header__overlay"></label>
        <div class="header__blockNavSlip background-colorHex191c26 overflowAuto">
            <div class="header__subBlockNavSlip width475px">
                <div class="">
                    <div class="header__blockNavSlip-TextMenu">Menu</div>
                    <div>
                        <div class="header__blockSearchNavSlip FlexAlign-itemsCenter">
                            <img class="header__blockSearch-logoSearch"
                                src="../../../public/img/search-default-icon.svg" alt="Search">
                            <input class="header__blockSearch-inputSearch" placeholder="Tìm kiếm trong menu">
                        </div>
                    </div>
                    <div class="header__blockNavSlipStudyAndNews ">
                        <div class="marginBottom16px">
                            <div class="header__NavSlip-TextStudy">Học tập</div>
                            <div class="header__blockIconsAndTitleTopics">
                                <a href="" class="displayFlex marginBottom16px">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/lo-trinh-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Lộ trình</div>
                                        <div class="header__NavSlipUnderTitleTopic">Cung cấp các lộ trình học tập
                                            đầy đủ để đáp ứng các kỹ năng nghề nghiệp
                                            cụ thể. Hoàn thành lộ trình là có thể làm việc thực tế ngay lập tức.
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="displayFlex marginBottom16px">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/khoa-hoc-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Khóa học</div>
                                        <div class="header__NavSlipUnderTitleTopic">Danh sách các khóa học được
                                            thiết kế chi tiết, bài bản với bài tập thực
                                            hành giúp học dễ hiểu và nắm bắt kiến thức nhanh hơn.</div>
                                    </div>
                                </a>
                                <a href="" class="displayFlex marginBottom16px">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/luyen-tap-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Luyện tập</div>
                                        <div class="header__NavSlipUnderTitleTopic">Các chủ đề Luyện tập với vô vàn
                                            các bài tập khác nhau để luyện tập các
                                            kỹ năng cụ thể giúp ôn luyện kiến thức và đi vào chuyên sâu hơn các vấn
                                            đề thực tế.</div>
                                    </div>
                                </a>
                                <a href="" class="displayFlex">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/tutorial-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Tutorial</div>
                                        <div class="header__NavSlipUnderTitleTopic">
                                            Hướng dẫn sử dụng các công nghệ mới nhất, giúp bạn dễ dàng tiếp cận và
                                            biết cách sử dụng các công nghệ cập nhật.
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div>
                            <div class="header__NavSlip-TextNews">Bài viết</div>
                            <div>
                                <a href="" class="displayFlex marginBottom16px">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/kien-thuc-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Kiến thức</div>
                                        <div class="header__NavSlipUnderTitleTopic">
                                            Những bài viết kiến thức chuyên sâu, chất lượng được đội ngũ chuyên gia
                                            kiểm duyệt.
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="displayFlex marginBottom16px">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/tin-tuc-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Tin tức</div>
                                        <div class="header__NavSlipUnderTitleTopic">
                                            Các tin tức mới nhất về công nghệ giúp bạn cập nhật những xu hướng công
                                            nghệ mới nhất.
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="displayFlex marginBottom16px">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/editor-choice-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Editor Choice</div>
                                        <div class="header__NavSlipUnderTitleTopic">
                                            Các bài viết được chọn lọc bởi đội ngũ chuyên gia đánh giá.
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="displayFlex marginBottom16px">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/toplist-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Toplist</div>
                                        <div class="header__NavSlipUnderTitleTopic">
                                            Danh sách các công nghệ khuyến nghị tốt nhất.
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="displayFlex marginBottom16px">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/review-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Review</div>
                                        <div class="header__NavSlipUnderTitleTopic">
                                            Đánh giá các sản phẩm công nghệ, phần mềm chất lượng phổ biến.
                                        </div>
                                    </div>
                                </a>
                                <a href="" class="displayFlex ">
                                    <div class="header__NavSlip-blockIcon">
                                        <img src="../../../public/img/series-icon.svg" alt="Icon-Logo">
                                    </div>
                                    <div>
                                        <div class="header__NavSlipTitleTopic">Series</div>
                                        <div class="header__NavSlipUnderTitleTopic">
                                            Những bài viết nhiều kỳ được biên soạn.
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      </nav>`;
};
export default navigation;
