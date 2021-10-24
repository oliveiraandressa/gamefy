-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24-Out-2021 às 15:05
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `chargear`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `characteristics`
--

CREATE TABLE `characteristics` (
  `id` int(11) NOT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `name_singular_male` varchar(45) DEFAULT NULL,
  `name_singular_fem` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `characteristics`
--

INSERT INTO `characteristics` (`id`, `desc`, `name_singular_male`, `name_singular_fem`) VALUES
(1, NULL, 'aberto', 'aberta'),
(2, NULL, 'acessível', 'acessível'),
(3, NULL, 'acolhedor', 'acolhedora'),
(4, NULL, 'adiantado', 'adiantada'),
(5, NULL, 'admirável', 'admirável'),
(6, NULL, 'adorável', 'adorável'),
(7, NULL, 'afetuoso', 'afetuosa'),
(8, NULL, 'ágil', 'ágil'),
(9, NULL, 'agradável', 'agradável'),
(10, NULL, 'ajuizado', 'ajuizada'),
(11, NULL, 'alegre', 'alegre'),
(12, NULL, 'alerta', 'alerta'),
(13, NULL, 'altruísta', 'altruísta'),
(14, NULL, 'amavel', 'amavel'),
(15, NULL, 'amistoso', 'amistosa'),
(16, NULL, 'amoroso', 'amorosa'),
(17, NULL, 'animado', 'animada'),
(18, NULL, 'apaixonado', 'apaixonada'),
(19, NULL, 'aplicado', 'aplicada'),
(20, NULL, 'aprazível', 'aprazível'),
(21, NULL, 'apto', 'apta'),
(22, NULL, 'arguto', 'arguta'),
(23, NULL, 'assertivo', 'assertiva'),
(24, NULL, 'astuto', 'astuta'),
(25, NULL, 'atencioso', 'atenciosa'),
(26, NULL, 'atento', 'atenta'),
(27, NULL, 'atraente', 'atraente'),
(28, NULL, 'audaz', 'audaz'),
(29, NULL, 'autêntico', 'autêntica'),
(30, NULL, 'aventureiro', 'aventureira'),
(31, NULL, 'bacana', 'bacana'),
(32, NULL, 'batalhador', 'batalhadora'),
(33, NULL, 'bem-humorado', 'bem-humorada'),
(34, NULL, 'bem-intencionado', 'bem-intencionada'),
(35, NULL, 'bondoso', 'bondosa'),
(36, NULL, 'bravo', 'brava'),
(37, NULL, 'brilhante', 'brilhante'),
(38, NULL, 'brincalhão', 'brincalhona'),
(39, NULL, 'calculista', 'calculista'),
(40, NULL, 'calmo', 'calma'),
(41, NULL, 'caloroso', 'calorosa'),
(42, NULL, 'camarada', 'camarada'),
(43, NULL, 'caridoso', 'caridosa'),
(44, NULL, 'carinhoso', 'carinhosa'),
(45, NULL, 'carismático', 'carismática'),
(46, NULL, 'cativante', 'cativante'),
(47, NULL, 'cauteloso', 'cautelosa'),
(48, NULL, 'centrado', 'centrada'),
(49, NULL, 'chato', 'chata'),
(50, NULL, 'chorão', 'chorona'),
(51, NULL, 'cínico', 'cínica'),
(52, NULL, 'ciumento', 'ciumenta'),
(53, NULL, 'coerente', 'coerente'),
(54, NULL, 'colaborador', 'colaboradora'),
(55, NULL, 'comedido', 'comedida'),
(56, NULL, 'comodista', 'comodista'),
(57, NULL, 'companheiro', 'companheira'),
(58, NULL, 'compassivo', 'compassiva'),
(59, NULL, 'competente', 'competente'),
(60, NULL, 'complacente', 'complacente'),
(61, NULL, 'comportado', 'comportada'),
(62, NULL, 'compreensivo', 'compreensiva'),
(63, NULL, 'confiante', 'confiante'),
(64, NULL, 'confiável', 'confiável'),
(65, NULL, 'confidente', 'confidente'),
(66, NULL, 'conflituoso', 'conflituosa'),
(67, NULL, 'controlador', 'controladora'),
(68, NULL, 'convencido', 'convencida'),
(69, NULL, 'convicto', 'convicta'),
(70, NULL, 'cooperador', 'cooperadora'),
(71, NULL, 'corajoso', 'corajosa'),
(72, NULL, 'cordial', 'cordial'),
(73, NULL, 'correto', 'correta'),
(74, NULL, 'criativo', 'criativa'),
(75, NULL, 'criterioso', 'criteriosa'),
(76, NULL, 'cuidadoso', 'cuidadosa'),
(77, NULL, 'decidido', 'decidida'),
(78, NULL, 'decoroso', 'decorosa'),
(79, NULL, 'dedicado', 'dedicada'),
(80, NULL, 'delicado', 'delicada'),
(81, NULL, 'desapegado', 'desapegada'),
(82, NULL, 'desastrado', 'desastrada'),
(83, NULL, 'descuidado', 'descuidada'),
(84, NULL, 'desejável', 'desejável'),
(85, NULL, 'desembaraçado', 'desembaraçada'),
(86, NULL, 'desleixado', 'desleixada'),
(87, NULL, 'desligado', 'desligada'),
(88, NULL, 'desobediente', 'desobediente'),
(89, NULL, 'desorganizado', 'desorganizada'),
(90, NULL, 'destemido', 'destemida'),
(91, NULL, 'didático', 'didática'),
(92, NULL, 'dinâmico', 'dinâmica'),
(93, NULL, 'diplomático', 'diplomática'),
(94, NULL, 'disciplinado', 'disciplinada'),
(95, NULL, 'discreto', 'discreta'),
(96, NULL, 'disponível', 'disponível'),
(97, NULL, 'disposto', 'disposta'),
(98, NULL, 'dissimulado', 'dissimulada'),
(99, NULL, 'distraído', 'distraída'),
(100, NULL, 'divertido', 'divertida'),
(101, NULL, 'dócil', 'dócil'),
(102, NULL, 'dramático', 'dramática'),
(103, NULL, 'duro', 'dura'),
(104, NULL, 'econômico', 'econômica'),
(105, NULL, 'educado', 'educada'),
(106, NULL, 'eficaz', 'eficaz'),
(107, NULL, 'eficiente', 'eficiente'),
(108, NULL, 'efusivo', 'efusiva'),
(109, NULL, 'egocêntrico', 'egocêntrica'),
(110, NULL, 'egoísta', 'egoísta'),
(111, NULL, 'elegante', 'elegante'),
(112, NULL, 'eloquente', 'eloquente'),
(113, NULL, 'emotivo', 'emotiva'),
(114, NULL, 'empático', 'empática'),
(115, NULL, 'empenhado', 'empenhada'),
(116, NULL, 'empolgado', 'empolgada'),
(117, NULL, 'empreendedor', 'empreendedora'),
(118, NULL, 'encantador', 'encantadora'),
(119, NULL, 'encorajador', 'encorajadora'),
(120, NULL, 'engenhoso', 'engenhosa'),
(121, NULL, 'engraçado', 'engraçada'),
(122, NULL, 'enjoado', 'enjoada'),
(123, NULL, 'entendido', 'entendida'),
(124, NULL, 'entusiasmado', 'entusiasmada'),
(125, NULL, 'entusiasta', 'entusiasta'),
(126, NULL, 'equilibrado', 'equilibrada'),
(127, NULL, 'escandaloso', 'escandalosa'),
(128, NULL, 'esforçado', 'esforçada'),
(129, NULL, 'esmerado', 'esmerada'),
(130, NULL, 'esperançoso', 'esperançosa'),
(131, NULL, 'esperto', 'esperta'),
(132, NULL, 'espontâneo', 'espontânea'),
(133, NULL, 'estável', 'estável'),
(134, NULL, 'estudioso', 'estudiosa'),
(135, NULL, 'exagerado', 'exagerada'),
(136, NULL, 'exibido', 'exibida'),
(137, NULL, 'exigente', 'exigente'),
(138, NULL, 'explosivo', 'explosiva'),
(139, NULL, 'expressivo', 'expressiva'),
(140, NULL, 'extravagante', 'extravagante'),
(141, NULL, 'extrovertido', 'extrovertido'),
(142, NULL, 'falador', 'faladora'),
(143, NULL, 'firme', 'firme'),
(144, NULL, 'flexível', 'flexível'),
(145, NULL, 'focado', 'focada'),
(146, NULL, 'fofo', 'fofa'),
(147, NULL, 'fofoqueiro', 'fofoqueira'),
(148, NULL, 'folgado', 'folgada'),
(149, NULL, 'forte', 'forte'),
(150, NULL, 'franco', 'franca'),
(151, NULL, 'ganancioso', 'gananciosa'),
(152, NULL, 'generoso', 'generosa'),
(153, NULL, 'gentil', 'gentil'),
(154, NULL, 'genuíno', 'genuína'),
(155, NULL, 'grato', 'grata'),
(156, NULL, 'grosseiro', 'grosseira'),
(157, NULL, 'habilidoso', 'habilidosa'),
(158, NULL, 'higiênico', 'higiênica'),
(159, NULL, 'honesto', 'honesta'),
(160, NULL, 'hospitaleiro', 'hospitaleira'),
(161, NULL, 'humanitário', 'humanitário'),
(162, NULL, 'humilde', 'humilde'),
(163, NULL, 'idealista', 'idealista'),
(164, NULL, 'imponente', 'imponente'),
(165, NULL, 'independente', 'independente'),
(166, NULL, 'inspirador', 'inspiradora'),
(167, NULL, 'instruído', 'instruída'),
(168, NULL, 'insubordinado', 'insubordinada'),
(169, NULL, 'íntegro', 'íntegra'),
(170, NULL, 'intenso', 'intensa'),
(171, NULL, 'intuitivo', 'intuitiva'),
(172, NULL, 'irresponsável', 'irresponsável'),
(173, NULL, 'irreverente', 'irreverente'),
(174, NULL, 'jeitoso', 'jeitosa'),
(175, NULL, 'justiceiro', 'justiceiro'),
(176, NULL, 'justo', 'justo'),
(177, NULL, 'leal', 'leal'),
(178, NULL, 'legítimo', 'legítima'),
(179, NULL, 'liberal', 'liberal'),
(180, NULL, 'malvado', 'malvada'),
(181, NULL, 'mandão', 'mandona'),
(182, NULL, 'manhoso', 'manhosa'),
(183, NULL, 'maternal', 'maternal'),
(184, NULL, 'meigo', 'meiga'),
(185, NULL, 'meticuloso', 'meticulosa'),
(186, NULL, 'metido', 'metida'),
(187, NULL, 'metódico', 'metódica'),
(188, NULL, 'mimoso', 'mimosa'),
(189, NULL, 'minucioso', 'minuciosa'),
(190, NULL, 'mirabolante', 'mirabolante'),
(191, NULL, 'moderado', 'moderada'),
(192, NULL, 'moderno', 'moderna'),
(193, NULL, 'modesto', 'modesta'),
(194, NULL, 'motivado', 'motivada'),
(195, NULL, 'muquirana', 'muquirana'),
(196, NULL, 'notável', 'notável'),
(197, NULL, 'obcecado', 'obcecada'),
(198, NULL, 'obediente', 'obediente'),
(199, NULL, 'objetivo', 'objetiva'),
(200, NULL, 'observador', 'observadora'),
(201, NULL, 'obstinado', 'obstinada'),
(202, NULL, 'ordeiro', 'ordeiro'),
(203, NULL, 'organizado', 'organizado'),
(204, NULL, 'orgulhoso', 'orgulhoso'),
(205, NULL, 'original', 'original'),
(206, NULL, 'otimista', 'otimista'),
(207, NULL, 'ousado', 'ousada'),
(208, NULL, 'pacato', 'pacata'),
(209, NULL, 'paciente', 'paciente'),
(210, NULL, 'pacificador', 'pacificadora'),
(211, NULL, 'pacífico', 'pacífica'),
(212, NULL, 'parceiro', 'parceira'),
(213, NULL, 'perseverante', 'perseverante'),
(214, NULL, 'persistente', 'persistente'),
(215, NULL, 'perspicaz', 'perspicaz'),
(216, NULL, 'piedoso', 'piedosa'),
(217, NULL, 'ponderado', 'ponderada'),
(218, NULL, 'pontual', 'pontual'),
(219, NULL, 'possessivo', 'possessiva'),
(220, NULL, 'prepotente', 'prepotente'),
(221, NULL, 'prestativo', 'prestativa'),
(222, NULL, 'prevenido', 'prevenida'),
(223, NULL, 'prudente', 'prudente'),
(224, NULL, 'racional', 'racional'),
(225, NULL, 'realista', 'realista'),
(226, NULL, 'receptivo', 'receptiva'),
(227, NULL, 'resiliente', 'resiliente'),
(228, NULL, 'responsável', 'responsável'),
(229, NULL, 'sagaz', 'sagaz'),
(230, NULL, 'sarcástico', 'sarcástica'),
(231, NULL, 'sensato', 'sensata'),
(232, NULL, 'sensível', 'sensível'),
(233, NULL, 'sentimental', 'sentimental'),
(234, NULL, 'sério', 'séria'),
(235, NULL, 'simpático', 'simpática'),
(236, NULL, 'sincero', 'sincera'),
(237, NULL, 'soberbo', 'soberba'),
(238, NULL, 'sociável', 'sociável'),
(239, NULL, 'solícito', 'solícita'),
(240, NULL, 'solidário', 'solidária'),
(241, NULL, 'sonhador', 'sonhadora'),
(242, NULL, 'sossegado', 'sossegada'),
(243, NULL, 'submisso', 'submissa'),
(244, NULL, 'sutil', 'sutil'),
(245, NULL, 'talentoso', 'talentosa'),
(246, NULL, 'tolerante', 'tolerante'),
(247, NULL, 'trabalhador', 'trabalhadora'),
(248, NULL, 'tranquilo', 'tranquila'),
(249, NULL, 'transparente', 'transparente'),
(250, NULL, 'valente', 'valente'),
(251, NULL, 'verdadeiro', 'verdadeira'),
(252, NULL, 'versátil', 'versátil'),
(253, NULL, 'vigilante', 'vigilante'),
(254, NULL, 'visionário', 'visionária'),
(255, NULL, 'zeloso', 'zelosa');

-- --------------------------------------------------------

--
-- Estrutura da tabela `decanatos`
--

CREATE TABLE `decanatos` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `data_inicial` varchar(5) DEFAULT NULL,
  `data_final` varchar(5) DEFAULT NULL,
  `signo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `decanatos`
--

INSERT INTO `decanatos` (`id`, `nome`, `desc`, `data_inicial`, `data_final`, `signo_id`) VALUES
(1, 'Áries - Marte', NULL, '21/03', '31/03', 1),
(2, 'Áries - Sol', NULL, '01/04', '10/04', 1),
(3, 'Áries - Júpiter', NULL, '11/04', '20/04', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `decanatos_has_characteristics`
--

CREATE TABLE `decanatos_has_characteristics` (
  `decanato_id` int(11) NOT NULL,
  `characteristic_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `elementos`
--

CREATE TABLE `elementos` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `elementos`
--

INSERT INTO `elementos` (`id`, `nome`, `desc`) VALUES
(1, 'fogo', NULL),
(2, 'terra', NULL),
(3, 'ar', NULL),
(4, 'água', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `elementos_has_characteristics`
--

CREATE TABLE `elementos_has_characteristics` (
  `elemento_id` int(11) NOT NULL,
  `characteristic_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `inter_characteristics`
--

CREATE TABLE `inter_characteristics` (
  `id_char1` int(11) NOT NULL,
  `id_char2` int(11) NOT NULL,
  `is_oposite` int(11) DEFAULT 0,
  `is_sinonim` int(11) DEFAULT 0,
  `status` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `inter_skills`
--

CREATE TABLE `inter_skills` (
  `id_skill1` int(11) NOT NULL,
  `id_skill2` int(11) NOT NULL,
  `is_oposite` int(11) DEFAULT 0,
  `is_sinonim` int(11) DEFAULT 0,
  `status` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `signos`
--

CREATE TABLE `signos` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `tipo` int(11) NOT NULL,
  `elemento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `signos`
--

INSERT INTO `signos` (`id`, `nome`, `tipo`, `elemento`) VALUES
(1, 'Áries', 1, 1),
(2, 'Touro', 2, 2),
(3, 'Gêmeos', 3, 3),
(4, 'Câncer', 1, 4),
(5, 'Leão', 2, 1),
(6, 'Virgem', 3, 2),
(7, 'Libra', 1, 3),
(8, 'Escorpião', 2, 4),
(9, 'Sagitário', 3, 1),
(10, 'Capricórnio', 1, 2),
(11, 'Aquário', 2, 3),
(12, 'Peixes', 3, 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `signos_has_characteristics`
--

CREATE TABLE `signos_has_characteristics` (
  `signo_id` int(11) NOT NULL,
  `characteristic_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `desc` varchar(200) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `skills_has_characteristics`
--

CREATE TABLE `skills_has_characteristics` (
  `skill_id` int(11) NOT NULL,
  `char_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipos`
--

CREATE TABLE `tipos` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `tipos`
--

INSERT INTO `tipos` (`id`, `nome`, `desc`) VALUES
(1, 'Cardinal', NULL),
(2, 'Fixo', NULL),
(3, 'Mutável', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipos_has_characteristics`
--

CREATE TABLE `tipos_has_characteristics` (
  `tipo_id` int(11) NOT NULL,
  `characteristic_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `characteristics`
--
ALTER TABLE `characteristics`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `decanatos`
--
ALTER TABLE `decanatos`
  ADD PRIMARY KEY (`id`,`signo_id`),
  ADD KEY `fk_decanatos_signos1_idx` (`signo_id`);

--
-- Índices para tabela `decanatos_has_characteristics`
--
ALTER TABLE `decanatos_has_characteristics`
  ADD PRIMARY KEY (`decanato_id`,`characteristic_id`),
  ADD KEY `fk_decanatos_has_characteristics_characteristics1_idx` (`characteristic_id`),
  ADD KEY `fk_decanatos_has_characteristics_decanatos1_idx` (`decanato_id`);

--
-- Índices para tabela `elementos`
--
ALTER TABLE `elementos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `elementos_has_characteristics`
--
ALTER TABLE `elementos_has_characteristics`
  ADD PRIMARY KEY (`elemento_id`,`characteristic_id`),
  ADD KEY `fk_elementos_has_characteristics_characteristics1_idx` (`characteristic_id`),
  ADD KEY `fk_elementos_has_characteristics_elementos1_idx` (`elemento_id`);

--
-- Índices para tabela `inter_characteristics`
--
ALTER TABLE `inter_characteristics`
  ADD PRIMARY KEY (`id_char1`,`id_char2`),
  ADD KEY `fk_caracteristicas_has_caracteristicas_caracteristicas1_idx` (`id_char2`),
  ADD KEY `fk_caracteristicas_has_caracteristicas_caracteristicas_idx` (`id_char1`);

--
-- Índices para tabela `inter_skills`
--
ALTER TABLE `inter_skills`
  ADD PRIMARY KEY (`id_skill1`,`id_skill2`),
  ADD KEY `fk_caracteristicas_has_caracteristicas_caracteristicas1_idx` (`id_skill2`),
  ADD KEY `fk_caracteristicas_has_caracteristicas_caracteristicas_idx` (`id_skill1`);

--
-- Índices para tabela `signos`
--
ALTER TABLE `signos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_signos_tipos1_idx` (`tipo`),
  ADD KEY `fk_signos_elementos1_idx` (`elemento`);

--
-- Índices para tabela `signos_has_characteristics`
--
ALTER TABLE `signos_has_characteristics`
  ADD PRIMARY KEY (`signo_id`,`characteristic_id`),
  ADD KEY `fk_signos_has_characteristics_characteristics1_idx` (`characteristic_id`),
  ADD KEY `fk_signos_has_characteristics_signos1_idx` (`signo_id`);

--
-- Índices para tabela `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `skills_has_characteristics`
--
ALTER TABLE `skills_has_characteristics`
  ADD PRIMARY KEY (`skill_id`,`char_id`),
  ADD KEY `fk_skills_has_characteristics_characteristics1_idx` (`char_id`),
  ADD KEY `fk_skills_has_characteristics_skills1_idx` (`skill_id`);

--
-- Índices para tabela `tipos`
--
ALTER TABLE `tipos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `tipos_has_characteristics`
--
ALTER TABLE `tipos_has_characteristics`
  ADD PRIMARY KEY (`tipo_id`,`characteristic_id`),
  ADD KEY `fk_tipos_has_characteristics_characteristics1_idx` (`characteristic_id`),
  ADD KEY `fk_tipos_has_characteristics_tipos1_idx` (`tipo_id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `characteristics`
--
ALTER TABLE `characteristics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=256;

--
-- AUTO_INCREMENT de tabela `decanatos`
--
ALTER TABLE `decanatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `elementos`
--
ALTER TABLE `elementos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `inter_characteristics`
--
ALTER TABLE `inter_characteristics`
  MODIFY `id_char1` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `inter_skills`
--
ALTER TABLE `inter_skills`
  MODIFY `id_skill1` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `signos`
--
ALTER TABLE `signos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tipos`
--
ALTER TABLE `tipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `decanatos`
--
ALTER TABLE `decanatos`
  ADD CONSTRAINT `fk_decanatos_signos1` FOREIGN KEY (`signo_id`) REFERENCES `signos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `decanatos_has_characteristics`
--
ALTER TABLE `decanatos_has_characteristics`
  ADD CONSTRAINT `fk_decanatos_has_characteristics_characteristics1` FOREIGN KEY (`characteristic_id`) REFERENCES `characteristics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_decanatos_has_characteristics_decanatos1` FOREIGN KEY (`decanato_id`) REFERENCES `decanatos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `elementos_has_characteristics`
--
ALTER TABLE `elementos_has_characteristics`
  ADD CONSTRAINT `fk_elementos_has_characteristics_characteristics1` FOREIGN KEY (`characteristic_id`) REFERENCES `characteristics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_elementos_has_characteristics_elementos1` FOREIGN KEY (`elemento_id`) REFERENCES `elementos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `inter_characteristics`
--
ALTER TABLE `inter_characteristics`
  ADD CONSTRAINT `fk_caracteristicas_has_caracteristicas_caracteristicas` FOREIGN KEY (`id_char1`) REFERENCES `characteristics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_caracteristicas_has_caracteristicas_caracteristicas1` FOREIGN KEY (`id_char2`) REFERENCES `characteristics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `inter_skills`
--
ALTER TABLE `inter_skills`
  ADD CONSTRAINT `fk_caracteristicas_has_caracteristicas_caracteristicas0` FOREIGN KEY (`id_skill1`) REFERENCES `skills` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_caracteristicas_has_caracteristicas_caracteristicas10` FOREIGN KEY (`id_skill2`) REFERENCES `skills` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `signos`
--
ALTER TABLE `signos`
  ADD CONSTRAINT `fk_signos_elementos1` FOREIGN KEY (`elemento`) REFERENCES `elementos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_signos_tipos1` FOREIGN KEY (`tipo`) REFERENCES `tipos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `signos_has_characteristics`
--
ALTER TABLE `signos_has_characteristics`
  ADD CONSTRAINT `fk_signos_has_characteristics_characteristics1` FOREIGN KEY (`characteristic_id`) REFERENCES `characteristics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_signos_has_characteristics_signos1` FOREIGN KEY (`signo_id`) REFERENCES `signos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `skills_has_characteristics`
--
ALTER TABLE `skills_has_characteristics`
  ADD CONSTRAINT `fk_skills_has_characteristics_characteristics1` FOREIGN KEY (`char_id`) REFERENCES `characteristics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_skills_has_characteristics_skills1` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `tipos_has_characteristics`
--
ALTER TABLE `tipos_has_characteristics`
  ADD CONSTRAINT `fk_tipos_has_characteristics_characteristics1` FOREIGN KEY (`characteristic_id`) REFERENCES `characteristics` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tipos_has_characteristics_tipos1` FOREIGN KEY (`tipo_id`) REFERENCES `tipos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
