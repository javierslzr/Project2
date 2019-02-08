INSERT INTO `fitconnection`.`usuarios` (`name`, `correo`, `telefono`,`createdAt`,`updatedAt`) VALUES ('JAVIER', 'javier@m.com', '87855685',NOW(),NOW());
INSERT INTO `fitconnection`.`usuarios` (`name`, `correo`, `telefono`,`createdAt`,`updatedAt`) VALUES ('paulina', 'pau@home.com', '58452320',NOW(),NOW());
INSERT INTO `fitconnection`.`usuarios` (`name`, `correo`, `telefono`,`createdAt`,`updatedAt`) VALUES ('miguel', 'miguel@yyy.com', '78124754',NOW(),NOW());
INSERT INTO `fitconnection`.`usuarios` (`name`, `correo`, `telefono`,`createdAt`,`updatedAt`) VALUES ('anai', 'anai@gg.com', '45128523',NOW(),NOW());
INSERT INTO `fitconnection`.`usuarios` (`name`, `correo`, `telefono`,`createdAt`,`updatedAt`) VALUES ('alan', 'alan@destroy.com', '12235678',NOW(),NOW());

INSERT INTO `fitconnection`.`servicios` (`servicio`, `costo`,`createdAt`,`updatedAt`) VALUES ('yoga', '500',NOW(),NOW());
INSERT INTO `fitconnection`.`servicios` (`servicio`, `costo`,`createdAt`,`updatedAt`) VALUES ('kung fu', '600',NOW(),NOW());
INSERT INTO `fitconnection`.`servicios` (`servicio`, `costo`,`createdAt`,`updatedAt`) VALUES ('krav maga', '500',NOW(),NOW());
INSERT INTO `fitconnection`.`servicios` (`servicio`, `costo`,`createdAt`,`updatedAt`) VALUES ('pilates', '700',NOW(),NOW());
INSERT INTO `fitconnection`.`servicios` (`servicio`, `costo`,`createdAt`,`updatedAt`) VALUES ('pesas', '400',NOW(),NOW());

INSERT INTO `fitconnection`.`ubicacions` ( `nombre`, `direccion`,`createdAt`,`updatedAt`) VALUES ( 'monterrey', 'tapia 1500',NOW(),NOW());
INSERT INTO `fitconnection`.`ubicacions` ( `nombre`, `direccion`,`createdAt`,`updatedAt`) VALUES ( 'san pedro', 'vasconcelos 800',NOW(),NOW());
INSERT INTO `fitconnection`.`ubicacions` ( `nombre`, `direccion`,`createdAt`,`updatedAt`) VALUES ( 'contry', 'av juarez 340',NOW(),NOW());

INSERT INTO `fitconnection`.`maintables` (`fechaInicio`,`fechaFinal`,`createdAt`,`updatedAt`,`UsuarioId`,`ServicioId`,`UbicacionId`) VALUES ('2019-02-08 15:47:22',NOW(),NOW(),NOW(), '1', '2','3');
INSERT INTO `fitconnection`.`maintables` (`fechaInicio`,`fechaFinal`,`createdAt`,`updatedAt`,`UsuarioId`,`ServicioId`,`UbicacionId`) VALUES (NOW(),NOW(),NOW(),NOW(), '2', '2','2');
INSERT INTO `fitconnection`.`maintables` (`fechaInicio`,`fechaFinal`,`createdAt`,`updatedAt`,`UsuarioId`,`ServicioId`,`UbicacionId`) VALUES (NOW(),NOW(),NOW(),NOW(), '3', '4','1');
INSERT INTO `fitconnection`.`maintables` (`fechaInicio`,`fechaFinal`,`createdAt`,`updatedAt`,`UsuarioId`,`ServicioId`,`UbicacionId`) VALUES ('2019-02-08 15:47:22',NOW(),NOW(),NOW(), '4', '3','1');
INSERT INTO `fitconnection`.`maintables` (`fechaInicio`,`fechaFinal`,`createdAt`,`updatedAt`,`UsuarioId`,`ServicioId`,`UbicacionId`) VALUES (NOW(),NOW(),NOW(),NOW(), '5', '1','2');

