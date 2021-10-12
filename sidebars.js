module.exports = {

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
            type: 'doc',
            id: "running_a_server/1.17",
        },


        {
            type: 'category',
            label: 'Getting Started',
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
                'using_the_panel/databases',
                'using_the_panel/schedules',
                'using_the_panel/users',
                'using_the_panel/backups',
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
                'running_a_server/1.17',
                'running_a_server/jars',
                'running_a_server/optimization',
                'running_a_server/domain',
                'running_a_server/resourcepack',
                'running_a_server/java-version',
                'running_a_server/datapacks',
                'running_a_server/timings',
                'running_a_server/motd',
                'running_a_server/world-reset',
                'running_a_server/converting-worlds',
                'running_a_server/icon',
                'running_a_server/waterfall',
                'running_a_server/velocity',
                'running_a_server/binarysearch'
            ],
        },

        {
            type: 'category',
            label: 'Plugins & Modification',
            collapsed: true,
            items: [
                {
                    type: 'doc',
                    id: "plugins_and_modifications/installing-plugin",
                },
                {
                    type: 'doc',
                    id: "plugins_and_modifications/fabric-setup",
                },
                {
                    type: 'doc',
                    id: "plugins_and_modifications/forge-setup",
                },
                {
                    type: 'doc',
                    id: "plugins_and_modifications/fabric-mods",
                },
                {
                    type: 'doc',
                    id: "plugins_and_modifications/forge-mods",
                },
                {
                    type: 'doc',
                    id: "plugins_and_modifications/simple-voice-chat",
                },
                {
                    type: 'category',
                    label: "Fabric mods",
                    items: [
                        'plugins_and_modifications/fabric_mods/chunky_fabric',
                        'plugins_and_modifications/fabric_mods/luckperms_fabric',
                        'plugins_and_modifications/fabric_mods/performance-mods',
                    ]
                },
                {
                    type: 'category',
                    label: "Plugins",
                    items: [
                        'plugins_and_modifications/plugins/advancedanticheat',
                        'plugins_and_modifications/plugins/advancedban',
                        'plugins_and_modifications/plugins/bungeeguard',
                        'plugins_and_modifications/plugins/chunky',
                        'plugins_and_modifications/plugins/citizens2',
                        'plugins_and_modifications/plugins/conditionalcommands',
                        'plugins_and_modifications/plugins/coreprotect',
                        'plugins_and_modifications/plugins/craftingstore',
                        'plugins_and_modifications/plugins/discordsrv',
                        'plugins_and_modifications/plugins/dynmap',
                        'plugins_and_modifications/plugins/essentialsx',
                        'plugins_and_modifications/plugins/geysermc',
			'plugins_and_modifications/plugins/geyseraddons',
                        'plugins_and_modifications/plugins/griefprevention',
                        'plugins_and_modifications/plugins/litebans',
                        'plugins_and_modifications/plugins/luckperms',
                        'plugins_and_modifications/plugins/milk',
                        'plugins_and_modifications/plugins/multiverse',
                        'plugins_and_modifications/plugins/pl3xmap',
                        'plugins_and_modifications/plugins/plan',
                        'plugins_and_modifications/plugins/prism',
                        'plugins_and_modifications/plugins/servernpc',
                        'plugins_and_modifications/plugins/spark',
                        'plugins_and_modifications/plugins/tebex',
                        'plugins_and_modifications/plugins/vault',
                        'plugins_and_modifications/plugins/venturechat',
                        'plugins_and_modifications/plugins/viaversion',
                        'plugins_and_modifications/plugins/votifier',
			'plugins_and_modifications/plugins/vulcan',
                        'plugins_and_modifications/plugins/worldedit',
                    ]
                },
                {
                    type: 'category',
                    label: 'Billing',
                    collapsed: true,
                    items: [
                        'billing/billing_subusers',
                        'billing/cancellations',
                        'billing/suspensions_and_terminations',
                        'billing/refunds',
                        'billing/paypal'
                    ],
                },
            ]
        },


        {
            type: 'category',
            label: 'Extras',
            collapsed: true,
            items: [
                'extras/account-details',
				'extras/grafana',
                'extras/mobile-app',
                'extras/srvcontrol',
		        'extras/swap',
                'extras/clumsyloader',
                'extras/contributing',
                'extras/template'
            ],
        },

    ]
}
//'editing-account-details'
