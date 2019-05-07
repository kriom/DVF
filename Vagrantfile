# -*- mode: ruby -*-
# vi: set ft=ruby :

# plugins:
# - vagrant plugin install vagrant-disksize
# - vagrant plugin install vagrant-hostmanager

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/bionic64"
  config.disksize.size = "20GB"
  config.vm.provider :virtualbox do |vb|
    vb.customize ["modifyvm", :id, "--memory", "3800"]
  end
 # config.vm.synced_folder ".", "/app"
 # config.vm.provision :shell, :path => "./bootstrap.sh"
  config.vm.hostname = "example"

  # development server
  config.vm.network :forwarded_port, guest: 3000, host: 30030
  # test server
  config.vm.network :forwarded_port, guest: 5000, host: 30050

  config.ssh.forward_agent = true
end

