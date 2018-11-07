<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use App\Manager\ProjectManager;

class FrontController extends Controller
{
    /**
     * @Route("/", name="homepage", methods={"GET"})
     */
    public function homepage(ProjectManager $projectManager)
    {
        return $this->render('front/homepage.html.twig', [
            'projects' => $projectManager->getAll()
        ]);
    }
}