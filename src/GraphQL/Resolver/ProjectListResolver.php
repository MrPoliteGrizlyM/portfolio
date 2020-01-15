<?php
namespace App\GraphQL\Resolver;

use App\Entity\Project;
use Doctrine\ORM\EntityManagerInterface;
use Overblog\GraphQLBundle\Definition\Argument;
use Overblog\GraphQLBundle\Definition\Resolver\ResolverInterface;

Class ProjectListResolver implements ResolverInterface {

    /**
     * @var EntityManagerInterface
     */
    protected $em;

    public function __construct(EntityManagerInterface $em) {
        $this->em = $em;
    }

    public function resolver(Argument $args) {
        $projects = $this->em->getRepository(Project::class)->findBy(
            [],
            ['id' => 'desc'],
            $args['limit'],
            0
        );
        return ['projects' => $projects];
    }

}
