import Vue from 'vue'
import Router from 'vue-router'
import Project from '../components/project/project'
import Skill from '../components/skill/skill'
import Info from '../components/info/info'
import Contact from '../components/contact/contact'
import Notedetail from '../components/notedetail/notedetail'
import DetailList from '../components/detailList/detailList'

import List from '../components/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/project'
    },
    {
    	  path: '/project',
    	  component: Project,
      meta: { keepAlive: true }
    },
    {
    	  path: '/skill',
    	  component: Skill,
      meta: { keepAlive: true }
    },
    {
    	  path: '/info',
    	  component: Info,
    	  children: [
    	  	{
    	  		name: "list",
    	  		path: 'list',
    	  		component: List
    	  	}
    	  ]
    },
    {
    	  path: '/contact',
    	  component: Contact
    },
    {
    	  name: "detailList",
    	  path: '/detailList/:id',
    	  component: DetailList
    }
  ],
  linkActiveClass: "mui-active"
})
