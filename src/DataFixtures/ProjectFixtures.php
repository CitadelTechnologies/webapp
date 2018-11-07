<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

use App\Entity\Project;

class ProjectFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $data = require_once(__DIR__ . '/fixtures/projects.php');

        foreach ($data as $projectData) {
            $project =
                (new Project())
                ->setId($projectData['id'])
                ->setName($projectData['name'])
                ->setDescription($projectData['description'])
            ;
            $manager->persist($project);
            $this->setReference("project-{$project->getId()}", $project);
        }

        $manager->flush();
    }
}
