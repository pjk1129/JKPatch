//
//  ViewController.m
//  JSPatchKit
//
//  Created by JK.PENG on 16/3/31.
//  Copyright © 2016年 baidu. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    self.view.backgroundColor = [UIColor whiteColor];
    self.navigationItem.title = @"JSPatchDemo";
    
    UIButton  *button = [UIButton buttonWithType:UIButtonTypeCustom];
    button.frame = CGRectMake(40, 160, CGRectGetWidth(self.view.frame)-80, 40);
    [button setTitle:@"覆盖方法" forState:UIControlStateNormal];
    button.backgroundColor = [UIColor orangeColor];
    [button setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [button addTarget:self action:@selector(buttonDidTouchEvent) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
    
    UIButton  *button1 = [UIButton buttonWithType:UIButtonTypeCustom];
    button1.frame = CGRectMake(40, 260, CGRectGetWidth(self.view.frame)-80, 40);
    [button1 setTitle:@"添加新方法" forState:UIControlStateNormal];
    [button1 setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    button1.backgroundColor = [UIColor greenColor];
    [button1 addTarget:self action:@selector(buttonDidTouchEvent11) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button1];
}

- (void)viewDidAppear:(BOOL)animated{
    [super viewDidAppear:animated];
}

- (void)buttonDidTouchEvent {
    NSString* a = nil;
    NSDictionary* b = @{@"a":a};
    NSLog(@"b = %@",b);
    
    NSLog(@"====buttonDidTouchEvent 不能挂啊，不能挂啊，不能挂啊=====");
}

@end
