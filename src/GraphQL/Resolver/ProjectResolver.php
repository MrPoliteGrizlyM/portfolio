<?php
namespace App\GraphQL\Resolver;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Overblog\GraphQLBundle\Definition\Argument;
use Overblog\GraphQLBundle\Definition\Resolver\ResolverInterface;

Class ProjectResolver implements ResolverInterface {

    /**
     * @var EntityManagerInterface
     */
    protected $em;

    public function __construct(EntityManagerInterface $em) {
        $this->em = $em;
    }

    public function resolver(Argument $args) :Project {
        return $this->em->getRepository(Project::class)->find($args["id"]);
    }

}
