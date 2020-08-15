<?php

return [
    /**
     * Control if the seeder should create a user per role while seeding the data.
     */
    'create_users' => true,

    /**
     * Control if all the laratrust tables should be truncated before running the seeder.
     */
    'truncate_tables' => true,

    'roles_structure' => [
        'admin' => [
            'users' => 'c,r,u,d',
            'tickets' => 'c,r,u,d',
          
        ],
        'callCenter' => [
            'users' => 'c,r,u',
            'tickets' => 'r',

        ],
        'client' => [
      
            'tickets' => 'c,r,u',

        ],
        'developer' => [

            'tickets' => 'c,r,u',

        ],
      
    ],

    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete'
    ]
];
