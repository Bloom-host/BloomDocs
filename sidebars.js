module.exports = {
  someSidebar: {
    'Overview': [
      'overview',
      'editing-account-details'
    ],
    
    'Using the Panel': [
      'panel/basic-controls', 
      'panel/scheduling-actions', 
      'panel/how-to-use-sftp', 
      'panel/sub-users', 
      'panel/databases',
      'panel/reverse-proxy',
      'panel/split-server',
      'panel/file-manager-controls', 
      'panel/backups',
      'panel/2fa',
      'panel/open-ports'
    ],
    
    'Running a Server': [
      {
        'Other Server Jars': ['running-a-server/whichsoftwaretouse', 'running-a-server/setting-up-fabric', 'running-a-server/setting-up-forge'],
      },
      {
        'Install Plugins/Mods': ['running-a-server/bukkit-plugins', 'running-a-server/fabric-mods', 'running-a-server/forge-mods'],
      },
      'running-a-server/server-optimization',
      'running-a-server/pointing-a-domain', 
      'running-a-server/server-resource-packs',
      'running-a-server/change-java-version', 
      'running-a-server/datapacks', 
      'running-a-server/timings', 
      'running-a-server/motd', 
      'running-a-server/reset-worlds'
    ],
    
    'Server Modifications (Plugins/Mods)': [
      {
        'Plugins': [
          'server-mods/bukkit-plugins/advancedanticheat',
          'server-mods/bukkit-plugins/advancedban',
          'server-mods/bukkit-plugins/bungeeguard', 
          'server-mods/bukkit-plugins/chunky', 
          'server-mods/bukkit-plugins/citizens2',
          'server-mods/bukkit-plugins/conditionalcommands', 
          'server-mods/bukkit-plugins/coreprotect', 
          'server-mods/bukkit-plugins/craftingstore', 
          'server-mods/bukkit-plugins/discordsrv', 
          'server-mods/bukkit-plugins/dynmap', 
          'server-mods/bukkit-plugins/essentialsx',
          'server-mods/bukkit-plugins/geysermc', 
          'server-mods/bukkit-plugins/griefprevention',
          'server-mods/bukkit-plugins/Litebans', 
          'server-mods/bukkit-plugins/luckperms', 
          'server-mods/bukkit-plugins/Milk', 
          'server-mods/bukkit-plugins/multiverse', 
          'server-mods/bukkit-plugins/prism', 
          'server-mods/bukkit-plugins/ServerNPC', 
          'server-mods/bukkit-plugins/spark', 
          'server-mods/bukkit-plugins/viaversion',
          'server-mods/bukkit-plugins/vault', 
          'server-mods/bukkit-plugins/votifier', 
          'server-mods/bukkit-plugins/worldedit',
        ],
      },
      {
        'Fabric Mods': [
          'server-mods/fabric_mods/performance-mods',
          'server-mods/fabric_mods/chunky_fabric',
          'server-mods/fabric_mods/luckperms_fabric',
        ],
      },
    ],
    
    'Extras': [
      'extras/mobile-app',
      'extras/adding-an-icon', 
      'extras/srvcontrol'
    ],
    
    'Other Languages': [
      {
        'Español': [
          {
            'Lo Básico': [
              {
                'Controles del Panel': ['languages/spanish/basico/panel/controles-basicos', 'languages/spanish/basico/panel/horarios', 'languages/spanish/basico/panel/sftp', 'languages/spanish/basico/panel/sub-usuarios', 'languages/spanish/basico/panel/databases', 'languages/spanish/basico/panel/gestion-archivos', 'languages/spanish/basico/panel/2fa']
              }, 'languages/spanish/basico/software', 'languages/spanish/basico/motd', 'languages/spanish/basico/instalar-plugins', 'languages/spanish/basico/configurar-un-dominio', 'languages/spanish/basico/configurar-whitelist', 'languages/spanish/basico/datapacks', 'languages/spanish/basico/resource-packs'],
            'Optimización': ['languages/spanish/optimizacion/fabric', 'languages/spanish/optimizacion/paper', 'languages/spanish/optimizacion/timings'],
            'Plugins': ['languages/spanish/plugins/bungeeguard', 'languages/spanish/plugins/craftingstore', 'languages/spanish/plugins/chunky', 'languages/spanish/plugins/dynmap', 'languages/spanish/plugins/geysermc', 'languages/spanish/plugins/luckperms', 'languages/spanish/plugins/prism', 'languages/spanish/plugins/viaversion', 'languages/spanish/plugins/votifier'],
            'Extras': ['languages/spanish/extras/reverse-proxy', 'languages/spanish/extras/contributing']
          },
        ],

        'Italiano': [
          {
            'Controles del Panel': ['languages/italiano/controlli/controlli-di-base']
          },
        ],
      },
    ],
  },
}
