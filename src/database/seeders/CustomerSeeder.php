<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Customerのダミーデータを"ファクトリを使わずに"100件作成する
        $customers = [];
        for ($i = 0; $i < 100; $i++) {
            $customers[] = [
                'last_name' => fake()->lastName(),
                'first_name' => fake()->firstName(),
                'email' => fake()->unique()->safeEmail(),
                'phone' => fake()->phoneNumber(),
                'memo' => fake()->realText(),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }
        DB::table('customers')->insert($customers);
    }
}
