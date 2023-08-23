import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      {/* <!-- footer --> */}
      <footer class="py-5">
        <div class="container pt-md-5">
          <div class="footer-logo mb-lg-5 mb-4 text-center">
            <a class="navbar-brand" href="index.html">
              <span class="fa fa-newspaper"></span> Daily News
            </a>
            <p>
              We want to provide you with a great experience. Your feedback
              helps us bring you more of the events you love and the service you
              expect.
            </p>
          </div>
          <div class="footer-grid">
            <div class="w3l-copyright text-center">
              <div class="social text-center">
                <ul class="d-flex justify-content-center">
                  <li class="mx-md-2 mx-1">
                    <a href="#url" class="facebook">
                      <span class="fab fa-facebook-f"></span>
                    </a>
                  </li>
                  <li class="mx-md-2 mx-1">
                    <a href="#url" class="twitter">
                      <span class="fab fa-twitter"></span>
                    </a>
                  </li>
                  <li class="mx-md-2 mx-1">
                    <a href="#url" class="rss">
                      <span class="fas fa-rss"></span>
                    </a>
                  </li>
                  <li class="mx-md-2 mx-1">
                    <a href="#url" class="linkedin">
                      <span class="fab fa-linkedin-in"></span>
                    </a>
                  </li>
                  <li class="mx-md-2 mx-1">
                    <a href="#url" class="google">
                      <span class="fab fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <p class="mt-4">© 2023 Daily News. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer --> */}
    </div>
  );
}
