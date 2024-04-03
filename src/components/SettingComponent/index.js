import { useState } from 'react';
import './Setting.scss';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';

function SettingComponent() {
    const [interactNotify, setInteractNotify] = useState(true);
    const [chapterNotify, setChapterNotify] = useState(true);

    return (
        <div className="setting__container">
            <nav>
                <h3 className="settingsP">Cài đặt</h3>
            </nav>
            <div className="main">
                <div className="above-hr">
                    <h5 className="languageP">Ngôn ngữ</h5>
                    <p className="languagePP">
                        Hãy cho chúng tôi biết bạn cảm thấy thoải mái nhất khi sử dụng ngôn ngữ nào. Bạn có thể thay đổi
                        lại bất cứ lúc nào.{' '}
                    </p>
                    <div className="language-box">
                        <select name="" id="">
                            <option value="VN" className="option1">
                                Tiếng việt
                            </option>
                            <option value="EN" className="option2">
                                English
                            </option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="under-hr">
                    <div className="autoplay-box">
                        <div className="autoplay-caption">
                            <h5 className="autoplayP">Thông báo chương mới</h5>
                            <p className="autoplayPP">
                                Chọn khi bạn muốn được nhận thông báo chương mới các truyện bạn đang theo dõi
                            </p>
                        </div>
                        <div className="slide1">
                            <input
                                type="checkbox"
                                value="None"
                                id="slide1"
                                name="check"
                                checked={chapterNotify}
                                onChange={() => setChapterNotify(!chapterNotify)}
                            />
                            <label for="slide1"></label>
                        </div>
                    </div>
                    <div className="showphotos-box">
                        <div className="showphotos-caption">
                            <h5 className="showP">Thông báo tương tác</h5>
                            <p className="showPP">
                                Chọn khi bạn muốn được nhận thông báo về các tương tác từ những người dùng khác về những
                                hoạt động của bạn
                            </p>
                        </div>
                        <div className="slide2">
                            <input
                                type="checkbox"
                                value="None"
                                id="slide2"
                                name="check"
                                checked={interactNotify}
                                onChange={() => setInteractNotify(!interactNotify)}
                            />
                            <label for="slide2"></label>
                        </div>
                    </div>
                    <div className="btns-box">
                        <button className="btn-save">Lưu</button>
                        <button className="btn-cancel">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingComponent;
