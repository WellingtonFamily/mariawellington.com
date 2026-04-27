# mariawellington.com

Student portfolio site built with Jekyll.

## Local development with nix-shell

1. Enter the dev shell:
   - `nix-shell`
2. Install gems locally inside the repo:
   - `bundle install`
3. Start the site:
   - `bundle exec jekyll serve --livereload`
4. Open:
   - `http://127.0.0.1:4000`

All Ruby and Bundler dependencies stay isolated inside this project.
