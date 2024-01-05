<template>
  <div class="t" id="body">
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="yellow">
        <div class="white"></div>
      </div>
      <h5 class="headertext">Adilo</h5>
      <nav class="header-nav ms-auto mx-5">
        <ul class="d-flex align-items-center">
          <li class="nav-item pe-3">
            Projects
          </li>
          <li class="nav-item pe-3">
              Tools & App
          </li>
          <li class="nav-item pe-3">
            Channels
          </li>
          <li class="nav-item pe-3">
            Analytics
          </li>
          <li class="nav-item pe-3">
            Settinngs
          </li>
        </ul>
      </nav>
      <nav class="header-nav ms-auto mx-5">
        <ul class="d-flex align-items-center">
          <li class="nav-item pe-4">
            Help
          </li>
          <hr class="rightborder">
          <li class="nav-item pe-3">
            <div class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <img src="../../assets/profile-img.png" alt="Profile" class="rounded-circle">
              <div class="ps-2">
                <span>Cody Fisher</span>
                <span style="display: block !important;" class="text-muted">Cody Fisher@gmail.com</span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <!-- End Header -->
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">
      <!-- <img class="sideimg" src="../../../assets/sidebarlogo.png" alt=""> -->
      <ul class="sidebar-nav mt-3" id="sidebar-nav">

        <li class="nav-item">
          <a class="nav-link mx-3" href="#">
            <i class="bi bi-grid"></i>
            <span>My Recordings</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link mx-3" href="#">
            <i class="bi bi-share"></i>
            <span>Request</span>
          </a>
        </li>
      </ul>

    </aside>
    <main id="main" class="main">
      <slot></slot>
    </main>
  </div>
</template>


<style scoped>
.yellow{
    /* height: 200px; */
    border-radius: 5px;
    background-color: orange;
    padding: 5px;
    margin-right: 10px;
}
.white{
  background-color: white;
  padding: 10px;
  border-radius: 20px;
}
.sidebarStatic .logo {
  width: fit-content;
}

.logo {
  text-align: left !important;
  padding: 1px 15px 15px 15px !important;
  margin: 0px;
}

.headertext {
  padding-top: 8px;
  font: normal normal bold 22px/32px helvetica;
  color: #21455E;
}
.rightborder{
  height: 7vh;
  width: 0.1vw;
  border-width: 0;
  background-color: #434446;
  margin-right: 20px;
}
</style>
<style src="../../assets/css/styles.css" scoped></style>
<script>
export default {
  name: 'SideBar',
  data() {
    return {
      authType: '',
      menus: {},
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      if (document.getElementById('body').classList.contains("toggle-sidebar")) {
        if (screen.width > 1178) {
          document.getElementById("header").style.width = '80%';
          document.getElementById("header").style.marginLeft = '300px';
        }
        document.getElementById('body').classList.toggle('toggle-sidebar');
      }
      else {
        document.getElementById('body').classList.toggle('toggle-sidebar');
        document.getElementById("header").style.width = '100%';
        document.getElementById("header").style.marginLeft = '0px';
      }

    }
  },
  mounted() {
    // if (document.getElementById('body').classList.contains("toggle-sidebar")) {
    //     document.getElementById("header").style.width = '80%';
    //     document.getElementById("header").style.marginLeft = '302px';
    //     document.getElementById('body').classList.toggle('toggle-sidebar');
    //   }
    //   else {
    //     document.getElementById('body').classList.toggle('toggle-sidebar');
    //     document.getElementById("header").style.width = '100%';
    //     document.getElementById("header").style.marginLeft = '0px';
    //   }
  }
};
</script>