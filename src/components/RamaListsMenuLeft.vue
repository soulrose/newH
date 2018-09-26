<template>
  <v-card height="800px">
    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>myDEV Rama 2018</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="" :to="{ name: item.link}"
        >


          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
                     <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>





        </v-list-tile>



        <v-list-group
           prepend-icon="account_circle"
           value="true"
         >
           <v-list-tile slot="activator">
             <v-list-tile-title>Users</v-list-tile-title>
           </v-list-tile>

           <v-list-group
             no-action
             sub-group
             value="true"
           >
             <v-list-tile slot="activator">
               <v-list-tile-title>Admin</v-list-tile-title>
             </v-list-tile>

             <v-list-tile
               v-for="(admin, i) in admins"
               :key="i"
               @click=""
             >
               <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
               <v-list-tile-action>
                 <v-icon v-text="admin[1]"></v-icon>
               </v-list-tile-action>
             </v-list-tile>
           </v-list-group>

           <v-list-group
             sub-group
             no-action
           >
             <v-list-tile slot="activator">
               <v-list-tile-title>Actions</v-list-tile-title>
             </v-list-tile>

             <v-list-tile
               v-for="(crud, i) in cruds"
               :key="i"
               @click="" :to="{ name: crud[2]}"
             >
               <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
               <v-list-tile-action>
                 <v-icon v-text="crud[1]"></v-icon>
               </v-list-tile-action>
             </v-list-tile>
           </v-list-group>
         </v-list-group>

      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>




  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'home', link:'home' },
          { title: 'Lab', icon: 'opacity', link:'Lab'  },
          { title: 'RamaEMR', icon: 'local_hospital', link:'RamaEMR'  },
          { title: 'About', icon: 'question_answer', link:'About'  }
        ],
        admins: [
          ['Management', 'people_outline'],
          ['Settings', 'settings']
        ],
        cruds: [
          ['Create', 'add','home'],
          ['Read', 'insert_drive_file','About'],
          ['Update', 'update','About'],
          ['Delete', 'delete','About']
        ],
        right: null
      }
    }
  }
</script>
