"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCommentsArea: React.FC = () => {
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">2 Bình luận:</h3>

        <ol className="comment-list">
          <li className="comment">
            <article className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src="/images/author1.jpg"
                    className="avatar"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <b className="fn">John Jones</b>
                  <span className="says">nói:</span>
                </div>

                <div className="comment-metadata">24 Tháng 2, 2023 lúc 10:59 sáng</div>
              </footer>

              <div className="comment-content">
                <p>
                  Thời trang Việt Nam đã phát triển mạnh mẽ trong những năm gần đây, từ những bộ trang phục truyền thống như áo dài đến các thiết kế hiện đại và sáng tạo. Các nhà thiết kế Việt Nam không ngừng sáng tạo và mang đến những xu hướng mới mẻ, kết hợp giữa yếu tố truyền thống và hiện đại.
                </p>
              </div>

              <div className="reply">
                <Link href="#" className="comment-reply-link">
                  Trả lời
                </Link>
              </div>
            </article>

            <ol className="children">
              <li className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src="/images/author2.jpg"
                        className="avatar"
                        alt="image"
                        width={150}
                        height={150}
                      />
                      <b className="fn">Steven Smith</b>
                      <span className="says">nói:</span>
                    </div>

                    <div className="comment-metadata">
                      24 Tháng 2, 2023 lúc 10:59 sáng
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Áo dài không chỉ là biểu tượng văn hóa của Việt Nam mà còn là niềm tự hào của ngành thời trang quốc gia. Với các thiết kế tinh tế và chất liệu cao cấp, áo dài tiếp tục ghi điểm trong mắt các tín đồ thời trang cả trong nước và quốc tế.
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#" className="comment-reply-link">
                      Trả lời
                    </Link>
                  </div>
                </article>

                <ol className="children">
                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <Image
                            src="/images/author3.jpg"
                            className="avatar"
                            alt="image"
                            width={150}
                            height={150}
                          />
                          <b className="fn">Sarah Taylor</b>
                          <span className="says">nói:</span>
                        </div>

                        <div className="comment-metadata">
                          24 Tháng 2, 2023 lúc 10:59 sáng
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Xu hướng thời trang Việt Nam đang ngày càng hòa nhập với thế giới, mang đến sự đa dạng và phong phú trong các bộ sưu tập thời trang. Các nhà thiết kế trẻ đang tạo ra những xu hướng mới mẻ và thú vị, góp phần làm phong phú thêm nền thời trang toàn cầu.
                        </p>
                      </div>

                      <div className="reply">
                        <Link href="#" className="comment-reply-link">
                          Trả lời
                        </Link>
                      </div>
                    </article>
                  </li>
                </ol>
              </li>
            </ol>
          </li>

          <li className="comment">
            <article className="comment-body">
              <footer className="comment-meta">
                <div className="comment-author vcard">
                  <Image
                    src="/images/author4.jpg"
                    className="avatar"
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <b className="fn">John Doe</b>
                  <span className="says">nói:</span>
                </div>

                <div className="comment-metadata">24 Tháng 2, 2023 lúc 10:59 sáng</div>
              </footer>

              <div className="comment-content">
                <p>
                  Thời trang không chỉ là về việc ăn mặc, mà còn là cách chúng ta thể hiện bản thân và văn hóa. Ở Việt Nam, thời trang là sự kết hợp giữa cái cũ và cái mới, giữa truyền thống và hiện đại. Các nhà thiết kế đang tạo ra những bộ sưu tập đầy cảm hứng, làm nổi bật nét đẹp văn hóa và sự sáng tạo của người Việt Nam.
                </p>
              </div>

              <div className="reply">
                <Link href="#" className="comment-reply-link">
                  Trả lời
                </Link>
              </div>
            </article>

            <ol className="children">
              <li className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src="/images/author2.jpg"
                        className="avatar"
                        alt="image"
                        width={150}
                        height={150}
                      />
                      <b className="fn">James Anderson</b>
                      <span className="says">nói:</span>
                    </div>

                    <div className="comment-metadata">
                      24 Tháng 2, 2023 lúc 10:59 sáng
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>
                      Thời trang Việt Nam đang trong thời kỳ phát triển mạnh mẽ với những thiết kế độc đáo và sáng tạo. Sự kết hợp giữa các yếu tố văn hóa truyền thống và xu hướng hiện đại đã tạo ra những bộ sưu tập ấn tượng, khiến cho ngành thời trang Việt Nam ngày càng được chú ý và yêu thích.
                    </p>
                  </div>

                  <div className="reply">
                    <Link href="#" className="comment-reply-link">
                      Trả lời
                    </Link>
                  </div>
                </article>
              </li>
            </ol>
          </li>
        </ol>

        {/* Comment Form */}
        <div className="comment-respond">
          <h3 className="comment-reply-title">Để lại Bình luận</h3>

          <form className="comment-form">
            <p className="comment-notes">
              <span id="email-notes">
                Địa chỉ email của bạn sẽ không được công khai.
              </span>
              Các trường bắt buộc được đánh dấu <span className="required">*</span>
            </p>

            <p className="comment-form-comment">
              <label>Bình luận</label>
              <textarea
                name="comment"
                id="comment"
                rows={5}
                required
              ></textarea>
            </p>

            <p className="comment-form-author">
              <label>
                Tên <span className="required">*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                required
              />
            </p>

            <p className="comment-form-email">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email" id="email" name="email" required />
            </p>

            <p className="comment-form-url">
              <label>Trang web</label>
              <input type="url" id="url" name="url" />
            </p>

            <p className="comment-form-cookies-consent">
              <input
                type="checkbox"
                value="yes"
                name="comment-cookies-consent"
                id="comment-cookies-consent"
              />
              <label>
                Lưu tên, email và trang web của tôi trong trình duyệt này để lần bình luận sau.
              </label>
            </p>

            <p className="form-submit">
              <input
                type="submit"
                name="submit"
                id="submit"
                className="submit"
                value="Đăng Bình Luận"
              />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogCommentsArea;
