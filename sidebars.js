/*
When adding pages to the sidebar, make sure you use the page ID, not the file name of the page
For example, to add a page which had a filename of 'chunky-multi' and a page ID of 'chunky', you would add the following under the appropriate category:

'plugins_and_modifications/multiplatform/chunky'

'plugins_and_modifications/multiplatform/' is the path to the file and '/chunky' is the page ID.

The page ID can be found at the top of each document (usually the second line) where it will say 'id: <pageid>' (<pageid> would be the page ID you put into `sidebars.js`)

Not following this can cause the website build to fail!
*/
module.exports = {
    /* Organize sidebar alphabetically */

    docs: [
        {
            type: 'link',
            label: 'Website',
            href: 'https://bloom.host/'
        },
        {
            type: 'link',
            label: 'Support Discord',
            href: 'https://discord.gg/bloom',
        },
        {
            type: 'link',
            label: 'Billing Support',
            href: 'https://billing.bloom.host/supporttickets.php',
        },

        {
            type: 'category',
            label: 'Getting Started',
            collapsed: false,
            items: [
                'getting_started/overview',
            ],
        },

        {
            type: 'category',
            label: 'Using the Panel',
            collapsed: false,
            items: [
                {
                    type: 'link',
                    label: 'Feature Summary',
                    href: 'https://bloom.host/duck-panel',
                },
                'using_the_panel/basic-controls',
                'using_the_panel/file-manager-controls',
                'using_the_panel/server-importer',
                'using_the_panel/schedules',
                'using_the_panel/backups',
                'using_the_panel/users',
                'using_the_panel/databases',
                'using_the_panel/ports-and-proxies',
                'using_the_panel/sftp',
                'using_the_panel/split-server',
                'using_the_panel/2fa'
            ],
        },

        {
            type: 'category',
            label: 'Running a Server',
            collapsed: true,
            items: [
                'running_a_server/updating', // How to update
                'running_a_server/jars', // Explains the different server JAR file options
                'running_a_server/optimization', // Server optimisation information
                'running_a_server/world-reset',
                'running_a_server/domain',
                'running_a_server/java-version',
                'running_a_server/datapacks',
                'running_a_server/spark',
                'running_a_server/timings', // Deprecated, will be removed in a future version of Paper (https://github.com/PaperMC/Paper/discussions/10565)
                'running_a_server/icon',
                'running_a_server/motd',
                'running_a_server/whitelist', // How to turn on whitelist for both Java and Bedrock

                'running_a_server/resourcepack',
                'running_a_server/converting-worlds', // Converting worlds used on Bukkit (and forks) servers to allow for use in singleplayer/other server software
                "plugins_and_modifications/fabric-setup",
                "plugins_and_modifications/forge-setup",
                'running_a_server/waterfall', // [Unsupported] BungeeCord fork
                'running_a_server/velocity',
                'running_a_server/internal-servers',
                'running_a_server/binarysearch', // Troubleshooting errors caused by plugins
                'running_a_server/worlds',
                'running_a_server/mcaselector'
            ],
        },

        {
            type: 'category',
            label: 'Games',
            collapsed: true,
            items: [
                {
                    type: 'category',
                    label: 'Palworld',
                    items: [
                        'games/palworld/config',
                        'games/palworld/update',
                        'games/palworld/info'
                    ]
                },
                {
                    type: 'category',
                    label: 'Rust',
                    items: [
                        'games/rust/connecting',
                        'games/rust/admin',
                        'games/rust/server-list',
                        'games/rust/plugins',
                        'games/rust/worlds'
                    ]
                },
                {
                    type: 'category',
                    label: 'Terraria',
                    items: [
                        {
                            type: 'doc',
                            id: 'games/terraria/connecting'
                        },
                        {
                            type: 'doc',
                            id: 'games/terraria/password'
                        },
                        {
                            type: 'doc',
                            id: 'games/terraria/worlds'
                        },
                        {
                            type: 'doc',
                            id: 'games/terraria/banning'
                        },
                        {
                            type: 'category',
                            label: 'TShock',
                            collapsed: false,
                            items: [
                                'games/terraria/tshock/overview',
                                'games/terraria/tshock/admin',
                                'games/terraria/tshock/whitelisting',
                                'games/terraria/tshock/plugins',
                                'games/terraria/tshock/crossplay'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'tModLoader',
                            collapsed: false,
                            items: [
                                'games/terraria/tmodloader/overview',
                                'games/terraria/tmodloader/mods'
                            ]
                        }
                    ]
                }
            ]
        },

        {
            type: 'category',
            label: 'Plugins & Modification',
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: "plugins_and_modifications/installing-plugin", // Bukkit/Spigot/Paper plugin installation guide
                },
                {
                    type: 'doc',
                    id: "plugins_and_modifications/mods-install", // Mods install guide for both Forge and Fabric
                },
                {
                    type: 'doc',
                    id: "plugins_and_modifications/modpacks",
                },
                {
                    type: 'doc',
                    id: "plugins_and_modifications/gtnh", //GTNH
                },
                {
                    type: 'category',
                    label: "Fabric mods",
                    items: [ // Note: Chunky and LuckPerms pages were moved to multiplatform category
                        'plugins_and_modifications/fabric_mods/performance-mods' // Mods intended to improve client/server performance
                    ]
                },

                {
                    type: 'category',
                    label: "Multi-platform plugins & mods",
                    items: [
                        'plugins_and_modifications/multiplatform/advancedban', // Bans and punishment manager (Bukkit/Spigot/Paper, BungeeCord)
                        'plugins_and_modifications/multiplatform/bluemap', // 3D web map (Spigot/Paper, Paper/Folia, Forge, Fabric, Neoforge, Sponge)
                        'plugins_and_modifications/multiplatform/chunky', // World pre-generation plugin (Bukkit, Fabric, Forge)
                        'plugins_and_modifications/multiplatform/dynmap', // Dynamic web map of Minecraft worlds (Spigot/Paper, Forge, Fabric)
                        'plugins_and_modifications/multiplatform/litebans', // Bans and punishment manager (Spigot/Paper, BungeeCord, Velocity)
                        'plugins_and_modifications/multiplatform/luckperms', // Permissions (Bukkit/Spigot/Paper, BungeeCord, Sponge, Forge, Fabric, Nukkit, Velocity)
                        'plugins_and_modifications/multiplatform/plan', // Player Analytics, (Bukkit/Spigot/Paper, Sponge, Nukkit, Fabric)
                        'plugins_and_modifications/multiplatform/simple-voice-chat', // Voice chat (Bukkit/Spigot/Paper, Forge, Fabric)
                        'plugins_and_modifications/multiplatform/squaremap', // Online map (Paper, Fabric, Sponge)
                        'plugins_and_modifications/multiplatform/worldedit' // World management (Bukkit, Forge, Fabric, Sponge)
                    ]
                },

                {
                    type: 'category',
                    label: "Plugins", // Bukkit/Spigot/Paper plugins
                    items: [ // Note: Chunky, LiteBans, LuckPerms and PLAN pages were moved to multiplatform category
                        'plugins_and_modifications/plugins/advancedanticheat', // anticheat (discontinued)
                        'plugins_and_modifications/plugins/ajparkour', // ajParkour
                        'plugins_and_modifications/plugins/banannouncer', // announce bans in discord
                        'plugins_and_modifications/plugins/citizens2',
                        'plugins_and_modifications/plugins/conditionalcommands',
                        'plugins_and_modifications/plugins/coreprotect',
                        'plugins_and_modifications/plugins/craftingstore',
                        'plugins_and_modifications/plugins/discordsrv', //Discord <-> Minecraft bridge
                        'plugins_and_modifications/plugins/essentialsx',
                        'plugins_and_modifications/plugins/floodgate', // Works with GeyserMC to allow bedrock connections, without a Java Edition account.
                        'plugins_and_modifications/plugins/geysermc', // Minecraft Bedrock player bridge
                        'plugins_and_modifications/plugins/geyseraddons', // GeyserMC addons
                        'plugins_and_modifications/plugins/griefprevention',
                        'plugins_and_modifications/plugins/milk',
                        'plugins_and_modifications/plugins/multiverse', //Bukkit multi-world manager
                        'plugins_and_modifications/plugins/papi', // PlaceholderAPI
                        'plugins_and_modifications/plugins/prism',
                        'plugins_and_modifications/plugins/servernpc',
                        'plugins_and_modifications/plugins/tebex', // Minecraft server donation store integration, formerly known as BuyCraft
                        'plugins_and_modifications/plugins/vault',
                        'plugins_and_modifications/plugins/venturechat', // Chat handler
                        'plugins_and_modifications/plugins/viaversion',
                        'plugins_and_modifications/plugins/votifier', // Minecraft server vote site listener
                        'plugins_and_modifications/plugins/vulcan', // anticheat
                        'plugins_and_modifications/plugins/oraxen',
                        'plugins_and_modifications/plugins/denizen',
                        'plugins_and_modifications/plugins/ajLeaderboards',
                        'plugins_and_modifications/plugins/AdvancedEnchantments',
                        'plugins_and_modifications/plugins/CMI',
                        "plugins_and_modifications/install-proxy-plugin", // BungeeCord/Velocity proxy plugin install guide
                    ]
                }
            ]
        },

        {
            type: 'category',
            label: 'Other Servers',
            collapsed: true,
            items: [
                'other-servers/ark',
                'other-servers/caddy-server',
                'other-servers/grafana',
            ],
        },

        {
            type: 'category',
            label: 'VPS',
            collapsed: true,
            items: [
                'VPS/starting-with-vps',
                'VPS/vnc',
                'VPS/credentials-vps'
            ],
        },

        {
            type: 'category',
            label: 'Dedicated',
            collapsed: true,
            items: [
                'dedicated/reset-password'
            ],
        },

        {
            type: 'category',
            label: 'Billing',
            collapsed: true,
            items: [
                'billing/email_change',
                'billing/cancellations',
                'billing/upgrades',
                'billing/refunds',
                'billing/suspensions_and_terminations',
                'billing/billing_subusers',
                'billing/paypal',
                'billing/stripe'
            ],
        },

        {
            type: 'category',
            label: 'Extras',
            collapsed: true,
            items: [
                'extras/ping-issues',
                'extras/account-details',
                'extras/available-modpacks',
                'extras/srvcontrol',
                'extras/swap',
                'extras/clumsyloader'
            ],
        },

    ]
}
