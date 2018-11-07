<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181107123825 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user__users (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(50) NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(150) NOT NULL, salt VARCHAR(100) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:array)\', created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_FBE95248F85E0677 (username), UNIQUE INDEX UNIQ_FBE95248E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project__projects (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(80) NOT NULL, description LONGTEXT NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_636FB3135E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project__jobs (id INT AUTO_INCREMENT NOT NULL, project_id INT DEFAULT NULL, user_id INT DEFAULT NULL, title VARCHAR(80) NOT NULL, description VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_E6E31440166D1F9C (project_id), INDEX IDX_E6E31440A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE project__jobs ADD CONSTRAINT FK_E6E31440166D1F9C FOREIGN KEY (project_id) REFERENCES project__projects (id)');
        $this->addSql('ALTER TABLE project__jobs ADD CONSTRAINT FK_E6E31440A76ED395 FOREIGN KEY (user_id) REFERENCES user__users (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE project__jobs DROP FOREIGN KEY FK_E6E31440A76ED395');
        $this->addSql('ALTER TABLE project__jobs DROP FOREIGN KEY FK_E6E31440166D1F9C');
        $this->addSql('DROP TABLE user__users');
        $this->addSql('DROP TABLE project__projects');
        $this->addSql('DROP TABLE project__jobs');
    }
}
