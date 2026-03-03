#!/bin/bash
# Start the local preview server at http://localhost:6060
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/bin:$PATH"
cd site
bundle exec jekyll serve --source . --destination ../_site --port 6060 --livereload
