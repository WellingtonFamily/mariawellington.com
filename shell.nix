{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    ruby
  ];

  shellHook = ''
    export BUNDLE_PATH="$PWD/.bundle"
    export BUNDLE_BIN="$PWD/.bundle/bin"
    export GEM_HOME="$PWD/.bundle"
    export GEM_PATH="$PWD/.bundle"
    export PATH="$BUNDLE_BIN:$PATH"

    echo "nix-shell ready: $(ruby -v)"
    echo "Run: bundle install && bundle exec jekyll serve --livereload"
  '';
}
