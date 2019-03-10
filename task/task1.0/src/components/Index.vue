<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
               <p>任务管理系統</p>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <!-- <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu> -->
                         <Submenu v-for="(item,key) in slideList" :key="key" :name="key" >
                             <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                {{item.title}}
                            </template>
                            <MenuItem :to="itemmenu.url" v-for="(itemmenu,keys) in item.children" :key="keys" :name="keys">{{itemmenu.title}}</MenuItem>
                            <!-- <MenuItem name="2-2">Option 2</MenuItem> -->
                         </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <!-- <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb> -->
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" class="mainContent">
                         <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        name:"Index",
        data:function(){
            return {
                slideList:[{
                     title:'开发部',
                     children:[{
                          title:'开发流程',
                          url:'/simple'
                     },
                     {
                          title:'开发流程',
                          url:'/slide/us'
                     },
                     
                        
                     ]
                },
                {
                     title:'开发部',
                     children:[{
                          title:'开发流程',
                          url:'/slide/us'
                     },
                     
                        
                     ]
                }
                ]
            }
        }

    }
</script>
<style>
   .mainContent{
       
   }
</style>
