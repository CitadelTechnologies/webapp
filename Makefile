install: build up status

up:

	docker-compose up -d

restart:

	docker-compose stop app && docker-compose up -d app

run:

	docker exec -it citadel_app /bin/bash

stop:

	docker-compose stop

rm:

	docker-compose down

status:

	docker-compose ps
