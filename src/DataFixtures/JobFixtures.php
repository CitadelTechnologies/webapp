<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use App\Entity\Job;

use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class JobFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $data = include(__DIR__ . '/fixtures/jobs.php');

        foreach ($data as $jobData) {
            $job =
                (new Job())
                ->setTitle($jobData['title'])
                ->setDescription($jobData['description'])
                ->setProject($this->getReference("project-{$jobData['project_id']}"))
            ;
            if (isset($jobData['user_id'])) {
                $job->setUser($this->getReference("user-{$jobData['user_id']}"));
            }
            $manager->persist($job);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
            ProjectFixtures::class,
        ];
    }
}
