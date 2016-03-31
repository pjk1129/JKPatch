

//修复bug
defineClass('ViewController', {
            viewDidLoad: function() {
            self.ORIGviewDidLoad();   //调用原来的方法
            // ”导入头文件“
            require("UIView, UIButton,UIColor, UIFont");
            
            var width = require('UIScreen').mainScreen().bounds().width
            var button2 = UIButton.buttonWithType(0)
            button2.setFrame({x:40, y: 340, width:width-80, height:40})
            button2.setTitle_forState('这是一个动态添加的按钮啊', 0)
            button2.setTitleColor_forState(UIColor.blackColor(), 0)
            button2.setBackgroundColor(UIColor.redColor());
            button2.addTarget_action_forControlEvents(self, 'handleBtn:', 1 << 6)
            self.view().addSubview(button2)
            },
            
            //方法覆盖
            buttonDidTouchEvent: function() {
            var alert = require('UIAlertView').alloc().init();
            alert.setTitle('提示');
            alert.setMessage('这是利用JSPatch覆盖了已经的方法');
            alert.addButtonWithTitle('取消');
            alert.addButtonWithTitle('确定');
            alert.show();
            },
            
            //添加新方法
            buttonDidTouchEvent11: function() {
            var alert = require('UIAlertView').alloc().init();
            alert.setTitle('提示');
            alert.setMessage('这是通过JSPatch为OC增加了方法');
            alert.addButtonWithTitle('取消');
            alert.addButtonWithTitle('确定');
            alert.show();
            },
            
            handleBtn: function(sender) {
            console.log('这是动态添加的按钮响应事件')
            var controller = JTableVeiwController.alloc().init();
            self.navigationController().pushViewController_animated(controller, 1)
            },
            
            })

//添加新模块
defineClass('JTableVeiwController : UIViewController <UITableViewDelegate,UITableViewDataSource>', {
            viewDidLoad: function() {
            self.super().viewDidLoad()
            self.setTitle('列表页');
            dataSource = null;
            self.setupUI();
            self.setupData();
            },
            
            viewDidAppear: function(animated) {
            self.super().viewDidAppear(animated);
            console.log('viewDidAppear')
            },
            
            setupUI:function (){
            // ”导入头文件“
            require("UIView, UITabelView, UILayer, UIButton, UILabel, UIColor, UITextField, UIFont");
            self.view().setBackgroundColor(UIColor.whiteColor());
            var width = require('UIScreen').mainScreen().bounds().width
            var height = require('UIScreen').mainScreen().bounds().height
            tableView = require('UITableView').alloc().initWithFrame_style({x:0, y:0, width:width, height:height}, 0);
            tableView.setDelegate(self);
            tableView.setDataSource(self);
            tableView.setRowHeight(55);  // 设置行高
            self.view().addSubview(tableView);
            },
            
            //dataSource方法
            numberOfSectionsInTableView: function(tableView) {
            return 1;
            },
            tableView_numberOfRowsInSection: function(tableView, section) {
            return dataSource.length;
            },
            // 创建cell
            tableView_cellForRowAtIndexPath:function(tableView, indexPath) {
              require('UITableViewCell');
            console.log('tableView_cellForRowAtIndexPath')

            var cell = tableView.dequeueReusableCellWithIdentifier('Cell');
            
            if (cell == false) {
            console.log('UITableViewCell false')
            cell = UITableViewCell.alloc().initWithStyle_reuseIdentifier(0, 'Cell');
            }
            cell.textLabel().setText(dataSource[indexPath.row()]);
            console.log('indexPath: '+indexPath)
            return cell;
            },
            
            //delete方法
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            tableView.deselectRowAtIndexPath_animated(indexPath, YES);
            var alert = require('UIAlertView').alloc().init();
            alert.setTitle('提示');
            alert.setMessage('选中了第 ' + indexPath.row() + ' 行');
            alert.addButtonWithTitle('取消');
            alert.addButtonWithTitle('确定');
            alert.show();
            },
            
            // 为表格提供数据源
            setupData:function() {
            var data = self.getProp('data');
            if (data) {return data;};
            data = [];
            var length = 50;
            for (var i = length - 1; i >= 0; i--) {
            data.push('JSPatch Cell from - ' + (length-i-1));
            };
            self.setProp_forKey(data, 'data');
            dataSource = data;
            },
            
            })




