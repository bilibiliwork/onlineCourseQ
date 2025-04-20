import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '@/views/MainView.vue'
import PlanView from '@/views/PlanView.vue'
import CourseDetailView from '@/views/CourseDetailView.vue'
import CourseView from '@/views/CourseView.vue'
import VideoView from '@/views/VideoView.vue'
import LearnView from '@/views/LearnView.vue'
import MediaView from '@/views/MediaView.vue'
import DiscussView from '@/views/DiscussView.vue'
import ProfilesView from '@/views/ProfilesView.vue'
import MyCourseView from '@/views/MyCourseView.vue'
import CurrentView from '@/views/CurrentView.vue'
import CompletedView from '@/views/CompletedView.vue'
import FutureView from '@/views/FutureView.vue'
import DeletedView from '@/views/DeletedView.vue'
import MineView from '@/views/MineView.vue'
import ForumView from '@/views/ForumView.vue'
import PostView from '@/views/PostView.vue'
import LikeView from '@/views/LikeView.vue'
import MyCommentsView from '@/views/MyCommentsView.vue'
import MyOrdersView from '@/views/MyOrdersView.vue'
import AccountView from '@/views/AccountView.vue'
import TeacherRootView from '@/views/TeacherRootView.vue'
import AddCourseView from '@/views/AddCourseView.vue'
import CourseListView from '@/views/CourseListView.vue'
import MediaListView from '@/views/MediaListView.vue'
import TeacherListView from '@/views/TeacherListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/teacherRoot',
    name: 'teacherRoot',
    component: TeacherRootView,
    children: [
      {
        path: 'teacherList',
        name: 'teacherList',
        component: TeacherListView
      },
      {
        path: 'courseList',
        name: 'courseList',
        component: CourseListView,
      },
      {
        path: 'addCourse/:cid',
        name: 'addCourse',
        component: AddCourseView,
      },
      {
        path: 'mediaList',
        name: 'mediaList',
        component: MediaListView,
      },
    ]
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',        // 空路径重定向
        redirect: 'main' // 或使用 name: 'main'
      },
      {
        path: 'main',
        name: 'main',
        component: MainView
      },
      {
        path: 'plan/:pid',
        name: 'plan',
        component: PlanView
      },
      {
        path: 'courseDetail/:cid',
        name: 'courseDetail',
        component: CourseDetailView
      },
    ],

  },
  {
    path: '/course',
    name: 'course',
    component: CourseView
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: ProfilesView,
    children: [{
        path: 'account',
        name: 'account',
        component: AccountView,
      },
      {
        path: 'my-order',
        name: 'my-order',
        component: MyOrdersView,
      },
      {
        path: 'myComments',
        name: 'myComments',
        component: MyCommentsView,
        children: [{
            path: 'post',
            name: 'post',
            component: PostView,
          },
          {
            path: 'like',
            name: 'like',
            component: LikeView,
          },
        ]
      },
      {
        path: 'myCourse',
        name: 'myCourse',
        component: MyCourseView,
        children: [{
            path: 'current',
            name: 'current',
            component: CurrentView
          },
          {
            path: 'completed',
            name: 'completed',
            component: CompletedView
          },
          {
            path: 'future',
            name: 'future',
            component: FutureView
          },
          {
            path: 'deleted',
            name: 'deleted',
            component: DeletedView
          },
        ]
      },
      {
        path: 'mine',
        name: 'mine',
        component: MineView
      },
    ]
  },
  {
    path: '/video/:mid',
    name: 'video',
    component: VideoView,
    children: [{
        path: 'learn',
        name: 'learn',
        component: LearnView,
        children: [{
          path: 'media/:vid',
          name: 'media',
          component: MediaView,
        }, {
          path: 'discuss/:did',
          name: 'discuss',
          component: DiscussView,
        }]
      },
      {
        path: 'forum',
        name: 'forum',
        component: ForumView,
      }
    ],
    }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}
})


export default router
