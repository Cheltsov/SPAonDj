<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <router-link :to="{name: user ? 'home': 'welcome'}" class="navbar-brand">
            {{appName}}
          </router-link>

          <button class="navbar-toggle" type="button" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="true">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="bavbarToggler">
            <ul class="navbar-nav ml-auto">
              <li v-if="user" class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle text-dark" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                  <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
                  {{user.last_name}} {{user.first_name}}
                </a>

                <div class="dropdown-menu">
                  <router-link :to="{name: 'settings.profile'}" class="dropdown-item p1-3">
                     <fa icon="cog" fixed-width/>
                      {{$t('settings')}}
                  </router-link>

                  <div class="dropdown-divider"/>
                  <a href="#" class="dropdown-item p1-3" @click.prevent="logout">
                    <fa icon="sing-out-alt" fixed-width/>
                  </a>
                </div>
              </li>
              <!--Guest-->
              <template v-else>
                <li class="nav-item">
                  <router-link :to="{name: 'login'}" class="nav-link" active-class="active">
                      {{$t('login')}}
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link :to="{name: 'register'}" class="nav-link" active-class="active">
                      {{$t('register')}}
                  </router-link>
                </li>
              </template>

            </ul>
          </div>

        </div>
    </nav>
</template>

<script>
  import {mapGetters} from 'vuex'
  import LocaleDropdown from './LocaleDropdown'

  export default {
    components: {
      LocaleDropdown
    },

    data: () => ({
      appName: window.config.appName
    }),
    computed: mapGetters({
      user: 'auth/user'
    }),
    methods: {
      async logout() {
        await this.$store.dispatch('auth/logout')

        this.$router.push({name: 'login'})
      }
    }

  }
</script>

<style scoped>
  .profile-photo {
    width: 2rem;
    height: 2rem;
    margin: -.375rem 0;
  }
</style>
