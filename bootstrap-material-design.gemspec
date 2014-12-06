# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |s|
  s.name        = 'bootstrap-material-design'
  s.version     =  '0.1.4'
  s.date        = '2014-11-25'
  s.summary     = "Material Design for Bootstrap"
  s.authors     = ["Paul King"]
  s.email       = 'freedomlijinfa@gmail.com'
  s.homepage    = 'https://github.com/Aufree/bootstrap-material-design'
  s.license     = 'MIT'

  s.files       = `git ls-files -z`.split("\x0")
  s.executables   = s.files.grep(%r{^bin/}) { |f| File.basename(f) }
  s.test_files    = s.files.grep(%r{^(test|s|features)/})
  s.require_paths = ['lib']

  s.add_dependency 'bootstrap-sass', '~>3.0'
end
