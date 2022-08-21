import { createRouter, createWebHashHistory } from 'vue-router'
import HomeTab from '../tabs/HomeTab.vue'
import ProjectsTab from '../tabs/ProjectsTab.vue'
import 'material-icons/iconfont/material-icons.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeTab
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsTab
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../tabs/EducationTab.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../tabs/ExperienceTab.vue')
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import('../tabs/AchievementsTab.vue')
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: () => import('../tabs/CertificationsTab.vue')
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('../tabs/ResearchTab.vue')
    },
    {
      path: '/volunteering',
      name: 'volunteering',
      component: () => import('../tabs/VolunteeringTab.vue')
    },
    {
      path: '/patents',
      name: 'patents',
      component: () => import('../tabs/PatentsTab.vue')
    },
  ]
})

export default router
