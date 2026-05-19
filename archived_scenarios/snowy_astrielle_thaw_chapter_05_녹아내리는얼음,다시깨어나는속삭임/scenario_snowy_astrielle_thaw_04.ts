export const scenario_snowy_astrielle_thaw_04 = {
	"scenario_id": "snowy_astrielle_thaw_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 푸른 빛이 깜빡이는 곳. 녹아내린 빙하 속에서 길이 열렸다.",
						"english": "Where a cold blue light flickers. A path opened within the melted glacier.",
						"japanese": "冷たい青い光が瞬く場所。溶けた氷河の中に道が開かれた。",
						"chinese": "冰冷的蓝光闪烁之处。融化的冰川中，一条道路被开启。",
						"french": "Là où une lumière bleue froide vacille. Un chemin s'ouvrit au sein du glacier fondu.",
						"spanish": "Donde una fría luz azul parpadea. Un camino se abrió dentro del glaciar derretido.",
						"vietnamese": "Nơi ánh sáng xanh lạnh lẽo nhấp nháy. Một con đường mở ra bên trong sông băng tan chảy.",
						"thai": "ที่ซึ่งแสงสีน้ำเงินเย็นยะเยือกกะพริบ ทางเปิดขึ้นภายในธารน้ำแข็งที่ละลาย",
						"hindi": "जहाँ ठंडी नीली रोशनी टिमटिमाती है। पिघले हुए ग्लेशियर के भीतर एक रास्ता खुला।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "glace",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...여긴... 원래 이런 곳이 아니었는데.",
						"english": "...This... wasn't how this place used to be.",
						"japanese": "...ここは...元々こんな場所じゃなかったのに。",
						"chinese": "...这里...以前不是这个样子的。",
						"french": "...Cet endroit... n'était pas comme ça avant.",
						"spanish": "...Este... lugar no solía ser así.",
						"vietnamese": "...Nơi này... trước đây không phải như vậy.",
						"thai": "...ที่นี่...ไม่เคยเป็นแบบนี้มาก่อนเลย",
						"hindi": "...यह... जगह पहले ऐसी नहीं थी।"
					},
					"emotion": "base",
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "글라세? 괜찮아 보여? 뭔가 이상한데.",
						"english": "Glace? Do you seem okay? Something's wrong.",
						"japanese": "グラッセ？大丈夫そう？何かおかしい。",
						"chinese": "格拉丝？你还好吗？总觉得哪里不对劲。",
						"french": "Glace ? Tu vas bien ? Quelque chose ne va pas.",
						"spanish": "¿Glace? ¿Pareces estar bien? Algo anda mal.",
						"vietnamese": "Glace? Bạn có vẻ ổn không? Có gì đó không ổn.",
						"thai": "กลาเซ่? ดูเหมือนนายไม่เป็นไรนะ? มีบางอย่างผิดปกติ",
						"hindi": "ग्लेस? तुम ठीक लग रही हो? कुछ तो गड़बड़ है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이상한 소리가... 얼음 밑에서 계속 들려와. 머리가... 너무 아파.",
						"english": "Strange sounds... keep coming from under the ice. My head... hurts so much.",
						"japanese": "変な音が...氷の下からずっと聞こえる。頭が...すごく痛い。",
						"chinese": "奇怪的声音...一直从冰下传来。头...好痛。",
						"french": "Des bruits étranges... continuent de venir de sous la glace. Ma tête... me fait tellement mal.",
						"spanish": "Sonidos extraños... siguen viniendo de debajo del hielo. Mi cabeza... me duele mucho.",
						"vietnamese": "Những âm thanh kỳ lạ... cứ văng vẳng từ dưới lớp băng. Đầu tôi... đau quá.",
						"thai": "เสียงแปลกๆ...ยังคงดังมาจากใต้ธารน้ำแข็ง หัวของฉัน...ปวดมากเลย",
						"hindi": "अजीब आवाज़ें... बर्फ़ के नीचे से आती रहती हैं। मेरा सिर... बहुत दर्द कर रहा है।"
					},
					"type": "speech",
					"speaker": "glace"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "glace",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 소리가... 점점 커지고 있어. 나를... 부르고 있어.",
						"english": "That sound... it's getting louder. It's... calling me.",
						"japanese": "あの音が...どんどん大きくなってる。私を...呼んでいる。",
						"chinese": "那个声音...越来越响了。它在...呼唤我。",
						"french": "Ce son... devient de plus en plus fort. Il m'...appelle.",
						"spanish": "Ese sonido... se está haciendo más fuerte. Me está... llamando.",
						"vietnamese": "Âm thanh đó... đang lớn dần. Nó đang... gọi tôi.",
						"thai": "เสียงนั้น...ดังขึ้นเรื่อยๆ มัน...กำลังเรียกฉัน",
						"hindi": "वह आवाज़... तेज़ होती जा रही है। वह मुझे... बुला रही है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "녹아내린 땅 위로 기이한 고대 문양들이 희미하게 떠올랐다.",
						"english": "Strange ancient patterns faintly emerged on the melted ground.",
						"japanese": "溶け落ちた大地の上に、奇妙な古代の模様がぼんやりと浮かび上がった。",
						"chinese": "融化的土地上，奇异的古代纹样模糊地浮现出来。",
						"french": "D'étranges motifs anciens apparurent faiblement sur le sol fondu.",
						"spanish": "Extraños patrones antiguos surgieron débilmente en el suelo derretido.",
						"vietnamese": "Những hoa văn cổ xưa kỳ lạ mờ nhạt hiện ra trên mặt đất tan chảy.",
						"thai": "ลวดลายโบราณแปลกๆ ปรากฏขึ้นจางๆ บนพื้นดินที่ละลาย",
						"hindi": "पिघली हुई ज़मीन पर अजीबोगरीब प्राचीन आकृतियाँ हल्की-हल्की उभर आईं।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "(글라세의 눈빛이 흔들린다. 저 불안정한 힘... 낯설지 않아.)",
						"english": "(Glace's eyes waver. That unstable power... it's not unfamiliar.)",
						"japanese": "(グラセの瞳が揺れる。あの不安定な力…見覚えがある。)",
						"chinese": "(格拉丝的眼神动摇了。那种不稳定的力量……似曾相识。)",
						"french": "(Les yeux de Glace vacillent. Cette puissance instable... ne m'est pas inconnue.)",
						"spanish": "(Los ojos de Glace vacilan. Ese poder inestable... no me es desconocido.)",
						"vietnamese": "(Đôi mắt Glace lay động. Sức mạnh bất ổn đó... không hề xa lạ.)",
						"thai": "(ดวงตาของกลาเซ่สั่นไหว พลังที่ไม่มั่นคงนั่น... ไม่ใช่สิ่งที่ไม่คุ้นเคย)",
						"hindi": "(ग्लेस की आँखें काँपती हैं। वह अस्थिर शक्ति... अपरिचित नहीं है।)"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "글라세! 정신 차려! 너답지 않아!",
						"english": "Glace! Snap out of it! This isn't like you!",
						"japanese": "グラセ！しっかりしろ！お前らしくないぞ！",
						"chinese": "格拉丝！清醒一点！你不是这样的！",
						"french": "Glace ! Reprends-toi ! Ce n'est pas toi !",
						"spanish": "¡Glace! ¡Reacciona! ¡Esto no es propio de ti!",
						"vietnamese": "Glace! Tỉnh táo lại đi! Cậu không phải như vậy!",
						"thai": "กลาเซ่! ตั้งสติหน่อย! นี่ไม่ใช่เธอเลยนะ!",
						"hindi": "ग्लेस! होश में आओ! तुम ऐसी नहीं हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "안 돼... 막을 수가 없어! 이끌리는 대로... 가야 해!",
						"english": "No... I can't stop it! I have to go where it leads!",
						"japanese": "ダメだ…止められない！導かれるままに…行くしかない！",
						"chinese": "不行……我无法阻止！只能顺其自然……跟着它走！",
						"french": "Non... Je ne peux pas l'arrêter ! Je dois la suivre où elle me mène !",
						"spanish": "No... ¡No puedo detenerlo! ¡Tengo que ir a donde me lleve!",
						"vietnamese": "Không... không thể ngăn cản! Phải đi theo nơi nó dẫn lối!",
						"thai": "ไม่นะ... ฉันหยุดมันไม่ได้! ต้องไปตามที่มันนำพา!",
						"hindi": "नहीं... मैं इसे रोक नहीं सकती! मुझे वहीं जाना होगा जहाँ यह ले जाए!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "...너희도... 저항하지 마. 함께... 어둠 속으로.",
						"english": "...You too... don't resist. Together... into the darkness.",
						"japanese": "…お前たちも…抗うな。共に…闇の中へ。",
						"chinese": "……你们也……不要抵抗。一起……进入黑暗。",
						"french": "...Vous aussi... ne résistez pas. Ensemble... dans les ténèbres.",
						"spanish": "...Vosotros también... no os resistáis. Juntos... en la oscuridad.",
						"vietnamese": "...Các ngươi cũng... đừng chống cự. Cùng nhau... vào bóng tối.",
						"thai": "...พวกเธอด้วย... อย่าขัดขืนเลยนะ ไปด้วยกัน... สู่ความมืดมิด",
						"hindi": "...तुम भी... विरोध मत करो। साथ में... अंधेरे में।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "glace",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "왜 방해하는 거야? 이 힘을... 느껴야 해! 모든 것을 집어삼킬 힘을!",
						"english": "Why are you interfering? I must feel this power! The power that devours everything!",
						"japanese": "なぜ邪魔をする？この力を…感じなければ！全てを飲み込む力を！",
						"chinese": "为什么要阻碍？我必须感受这股力量！吞噬一切的力量！",
						"french": "Pourquoi interférer ? Je dois ressentir ce pouvoir ! Le pouvoir qui dévore tout !",
						"spanish": "¿Por qué interfieres? ¡Debo sentir este poder! ¡El poder que lo devora todo!",
						"vietnamese": "Tại sao lại cản trở? Ta phải cảm nhận sức mạnh này! Sức mạnh nuốt chửng tất cả!",
						"thai": "ทำไมถึงขัดขวาง? ฉันต้องสัมผัสพลังนี้! พลังที่กลืนกินทุกสิ่ง!",
						"hindi": "तुम क्यों हस्तक्षेप कर रहे हो? मुझे यह शक्ति महसूस करनी चाहिए! वह शक्ति जो सब कुछ निगल जाती है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "녹아내린 유적 깊은 곳에서, 차가운 바람을 타고 알 수 없는 속삭임이 들려왔다.",
						"english": "From deep within the melted ruins, an unknown whisper rode the cold wind.",
						"japanese": "溶け落ちた遺跡の深淵から、冷たい風に乗って未知の囁きが聞こえてきた。",
						"chinese": "在融化的遗迹深处，一股不知名的低语乘着寒风传来。",
						"french": "Du plus profond des ruines fondues, un murmure inconnu chevauchait le vent froid.",
						"spanish": "Desde lo más profundo de las ruinas derretidas, un susurro desconocido cabalgó el viento frío.",
						"vietnamese": "Từ sâu trong tàn tích tan chảy, một lời thì thầm không rõ theo gió lạnh bay đến.",
						"thai": "จากส่วนลึกของซากปรักหักพังที่หลอมละลาย เสียงกระซิบที่ไม่รู้จักลอยมาตามสายลมหนาว",
						"hindi": "पिघले हुए खंडहरों की गहराई से, एक अज्ञात फुसफुसाहट ठंडी हवा पर सवार होकर आई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "글라세가 완전히 변했어! 우리가 알던 글라세가 아니야!",
						"english": "Glace has completely changed! This isn't the Glace we knew!",
						"japanese": "グラセが完全に変わってしまった！私たちが知るグラセじゃない！",
						"chinese": "格拉丝彻底变了！她已经不是我们认识的那个格拉丝了！",
						"french": "Glace a complètement changé ! Ce n'est plus la Glace que nous connaissions !",
						"spanish": "¡Glace ha cambiado por completo! ¡Esta no es la Glace que conocíamos!",
						"vietnamese": "Glace đã thay đổi hoàn toàn! Đây không phải là Glace mà chúng ta từng biết!",
						"thai": "กลาเซ่เปลี่ยนไปโดยสิ้นเชิง! นี่ไม่ใช่กลาเซ่ที่เรารู้จัก!",
						"hindi": "ग्लेस पूरी तरह से बदल गई है! यह वह ग्लेस नहीं है जिसे हम जानते थे!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 눈빛... 옛날의 나 같아. 그 고통... 반복될 수는 없어.",
						"english": "Those eyes... they're like my old self. That pain... it cannot be repeated.",
						"japanese": "あの眼差し…昔の私と同じだ。あの苦痛…繰り返されてはならない。",
						"chinese": "那眼神……就像过去的自己。那痛苦……不能再重演了。",
						"french": "Ces yeux... sont comme mon ancien moi. Cette douleur... ne peut pas être répétée.",
						"spanish": "Esos ojos... son como mi antiguo yo. Ese dolor... no puede repetirse.",
						"vietnamese": "Ánh mắt đó... giống như ta trước đây. Nỗi đau đó... không thể lặp lại.",
						"thai": "ดวงตาคู่นั้น... เหมือนตัวฉันในอดีต ความเจ็บปวดนั้น... จะไม่ถูกซ้ำรอย",
						"hindi": "वे आँखें... मेरे पुराने स्वरूप जैसी हैं। वह दर्द... दोहराया नहीं जा सकता।"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "방해하지 마! 내 길을 막지 마!",
						"english": "Don't interfere! Don't block my path!",
						"japanese": "邪魔するな！私の道を塞ぐな！",
						"chinese": "别妨碍我！别挡我的路！",
						"french": "N'interfère pas ! Ne bloque pas mon chemin !",
						"spanish": "¡No interfieras! ¡No bloquees mi camino!",
						"vietnamese": "Đừng cản trở! Đừng chặn đường ta!",
						"thai": "อย่ามาขัดขวาง! อย่ามาขวางทางฉัน!",
						"hindi": "हस्तक्षेप मत करो! मेरा रास्ता मत रोको!"
					},
					"speaker": "glace"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"emotion": "angry",
					"content": {
						"korean": "어둠은... 모든 것을 집어삼킬 것이다. 너희도... 나의 일부가 될 거야. 영원히.",
						"english": "Darkness... will devour everything. You too... will become part of me. Forever.",
						"japanese": "闇は…全てを飲み込むだろう。お前たちも…私の一部となる。永遠に。",
						"chinese": "黑暗……将吞噬一切。你们也……将成为我的一部分。永恒。",
						"french": "Les ténèbres... dévoreront tout. Vous aussi... ferez partie de moi. Pour l'éternité.",
						"spanish": "La oscuridad... lo devorará todo. Vosotros también... seréis parte de mí. Para siempre.",
						"vietnamese": "Bóng tối... sẽ nuốt chửng mọi thứ. Các ngươi cũng... sẽ trở thành một phần của ta. Vĩnh viễn.",
						"thai": "ความมืดมิด... จะกลืนกินทุกสิ่ง พวกเธอด้วย... จะกลายเป็นส่วนหนึ่งของฉัน ตลอดไป",
						"hindi": "अंधेरा... सब कुछ निगल जाएगा। तुम भी... मेरे ही हिस्से बनोगे। हमेशा के लिए।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "글라세가 완전히 잠식당했어! 이제 돌이킬 수 없어!",
						"english": "Glace is completely consumed! There's no turning back now!",
						"japanese": "グラッセは完全に侵食された！もう後戻りはできない！",
						"chinese": "格拉斯被完全侵蚀了！现在已无法挽回！",
						"french": "Glace est complètement consumée ! Il n'y a plus de retour possible !",
						"spanish": "¡Glace ha sido completamente consumida! ¡Ya no hay vuelta atrás!",
						"vietnamese": "Glace đã bị nuốt chửng hoàn toàn! Không thể quay đầu lại được nữa rồi!",
						"thai": "กลาเซถูกกลืนกินไปหมดแล้ว! ไม่มีทางหวนคืนได้อีกแล้ว!",
						"hindi": "ग्लेस पूरी तरह से निगल लिया गया है! अब कोई वापसी नहीं है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "안 돼... 다시는... 누구도 저렇게 만들 수 없어! 내가 막을 거야!",
						"english": "No... Never again... I won't let anyone end up like that! I'll stop it!",
						"japanese": "ダメだ…二度と…誰もあんな風にはさせない！私が止める！",
						"chinese": "不…绝不能再让…任何人变成那样！我会阻止的！",
						"french": "Non... Plus jamais... Je ne laisserai personne finir comme ça ! Je l'arrêterai !",
						"spanish": "No... Nunca más... ¡No dejaré que nadie termine así! ¡Lo detendré!",
						"vietnamese": "Không... Sẽ không bao giờ... không để ai phải như thế nữa! Ta sẽ ngăn chặn nó!",
						"thai": "ไม่นะ... ไม่มีทาง... จะไม่มีใครต้องเป็นแบบนั้นอีก! ฉันจะหยุดมันเอง!",
						"hindi": "नहीं... फिर कभी नहीं... मैं किसी को भी ऐसा नहीं बनने दूँगा! मैं इसे रोकूँगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아스트리엘의 정신을 옥죄는 고대 존재의 손길. 숨 쉬기조차 힘든 압박이었다.",
						"english": "The ancient entity's grasp choked Astriel's mind. It was a pressure that made even breathing difficult.",
						"japanese": "アストリエルの精神を締め付ける古代存在の手。息をするのも苦しいほどの圧迫だった。",
						"chinese": "古老存在之手扼住了阿斯特里尔的精神。那是连呼吸都困难的压迫。",
						"french": "La poigne de l'entité ancienne étranglait l'esprit d'Astriel. C'était une pression qui rendait même la respiration difficile.",
						"spanish": "La mano de la entidad ancestral asfixiaba la mente de Astriel. Era una presión que dificultaba incluso respirar.",
						"vietnamese": "Bàn tay của thực thể cổ đại siết chặt tâm trí Astriel. Một áp lực khiến ngay cả việc thở cũng trở nên khó khăn.",
						"thai": "หัตถ์ของสิ่งมีชีวิตโบราณบีบรัดจิตวิญญาณของแอสเทรียล มันเป็นแรงกดดันที่ทำให้หายใจลำบากแม้แต่น้อย",
						"hindi": "प्राचीन सत्ता की पकड़ ने एस्ट्रियल के दिमाग को जकड़ लिया। यह ऐसा दबाव था जिससे साँस लेना भी मुश्किल था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "광기가 서린 푸른 빛이 격렬하게 터져 나왔다. 글라세의 몸은 더 이상 그녀의 것이 아니었다.",
						"english": "A furious blue light, tinged with madness, erupted violently. Glace's body was no longer her own.",
						"japanese": "狂気を帯びた蒼い光が激しく噴き出した。グラッセの体はもはや彼女のものではなかった。",
						"chinese": "带着狂气的蓝色光芒猛烈爆发。格拉斯的身体已不再属于她自己。",
						"french": "Une lumière bleue furieuse, teintée de folie, éclata violemment. Le corps de Glace n'était plus le sien.",
						"spanish": "Una luz azul furiosa, teñida de locura, estalló violentamente. El cuerpo de Glace ya no le pertenecía.",
						"vietnamese": "Một luồng sáng xanh điên cuồng, đầy sự điên loạn, bùng nổ dữ dội. Cơ thể Glace không còn thuộc về cô ấy nữa.",
						"thai": "แสงสีน้ำเงินอันบ้าคลั่งระเบิดออกมาอย่างรุนแรง ร่างกายของกลาเซไม่เป็นของเธออีกต่อไป",
						"hindi": "उन्माद से भरी एक क्रुद्ध नीली रोशनी हिंसक रूप से फूट पड़ी। ग्लेस का शरीर अब उसका अपना नहीं था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 인간들... 감히 운명에 저항하는가? 이 힘을 막을 수 없다.",
						"english": "Foolish mortals... Do you dare defy fate? You cannot stop this power.",
						"japanese": "愚かな人間どもめ…運命に抗おうというのか？この力を止めることはできぬ。",
						"chinese": "愚蠢的人类…竟敢反抗命运？你们无法阻止这股力量。",
						"french": "Mortels insensés... Osez-vous défier le destin ? Vous ne pouvez pas arrêter ce pouvoir.",
						"spanish": "¡Mortales estúpidos... Osáis desafiar al destino? No podéis detener este poder.",
						"vietnamese": "Loài người ngu ngốc... Ngươi dám chống lại số phận sao? Ngươi không thể ngăn cản sức mạnh này.",
						"thai": "พวกมนุษย์โง่เขลา... กล้าดีอย่างไรมาท้าทายโชคชะตา? เจ้าหยุดพลังนี้ไม่ได้หรอก",
						"hindi": "मूर्ख नश्वर... क्या तुम भाग्य को चुनौती देने की हिम्मत करते हो? तुम इस शक्ति को रोक नहीं सकते।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "글라세를 해방시켜! 이 고대 존재!",
						"english": "Release Glace! You ancient entity!",
						"japanese": "グラッセを解放しろ！この古代存在め！",
						"chinese": "放开格拉斯！你这古老存在！",
						"french": "Libérez Glace ! Entité ancienne !",
						"spanish": "¡Libera a Glace! ¡Entidad ancestral!",
						"vietnamese": "Thả Glace ra! Ngươi, thực thể cổ đại!",
						"thai": "ปล่อยกลาเซซะ! เจ้าสิ่งมีชีวิตโบราณ!",
						"hindi": "ग्लेस को आज़ाद करो! तुम प्राचीन सत्ता!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 정령은... 이미 나의 완벽한 그릇. 너희의 과거처럼, 무력하게 집어삼켜질 뿐.",
						"english": "This spirit... is already my perfect vessel. Like your past, you will simply be swallowed helplessly.",
						"japanese": "この精霊は…すでに私の完璧な器だ。お前たちの過去のように、無力に飲み込まれるだけ。",
						"chinese": "这个精灵…已经是我完美的容器。就像你们的过去一样，只会无力地被吞噬。",
						"french": "Cet esprit... est déjà mon réceptacle parfait. Comme votre passé, vous serez simplement engloutis impuissants.",
						"spanish": "Este espíritu... ya es mi recipiente perfecto. Como vuestro pasado, simplemente seréis engullidos indefensos.",
						"vietnamese": "Linh hồn này... đã là vật chứa hoàn hảo của ta rồi. Giống như quá khứ của các ngươi, chỉ đơn giản là bị nuốt chửng một cách bất lực.",
						"thai": "วิญญาณดวงนี้... คือภาชนะที่สมบูรณ์แบบของข้าแล้ว เช่นเดียวกับอดีตของพวกเจ้า เจ้าจะถูกกลืนกินไปอย่างหมดหนทาง",
						"hindi": "यह आत्मा... पहले से ही मेरा पूर्ण पात्र है। तुम्हारे अतीत की तरह, तुम भी असहाय होकर निगल लिए जाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내 과거를... 함부로 말하지 마! 글라세를 놓아줘!",
						"english": "Don't... speak so carelessly of my past! Let Glace go!",
						"japanese": "私の過去を…軽々しく口にするな！グラッセを放せ！",
						"chinese": "别…别随意提及我的过去！放开格拉斯！",
						"french": "Ne... parle pas si légèrement de mon passé ! Lâche Glace !",
						"spanish": "¡No... hables tan a la ligera de mi pasado! ¡Suelta a Glace!",
						"vietnamese": "Đừng... đừng nói về quá khứ của ta một cách tùy tiện như vậy! Thả Glace ra!",
						"thai": "อย่า... อย่าพูดถึงอดีตของข้าอย่างไม่ระมัดระวังแบบนั้น! ปล่อยกลาเซซะ!",
						"hindi": "मेरे अतीत के बारे में... इतनी लापरवाही से बात मत करो! ग्लेस को छोड़ दो!"
					},
					"speaker": "character_1"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크윽... 불완전한 그릇... 하지만 너도... 곧 나의 일부가 될 것이다. 피할 수 없는 운명...",
						"english": "Ugh... An imperfect vessel... But you too... will soon become a part of me. An inescapable fate...",
						"japanese": "くっ…不完全な器め…だがお前も…すぐに私の一部となるだろう。避けられぬ運命だ…",
						"chinese": "呃…不完美的容器…但你也会…很快成为我的一部分。无法逃避的命运…",
						"french": "Argh... Un réceptacle imparfait... Mais toi aussi... tu feras bientôt partie de moi. Un destin inéluctable...",
						"spanish": "Ugh... Un recipiente imperfecto... Pero tú también... pronto serás parte de mí. Un destino ineludible...",
						"vietnamese": "Khụ... Một vật chứa không hoàn hảo... Nhưng ngươi cũng... sẽ sớm trở thành một phần của ta thôi. Một số phận không thể tránh khỏi...",
						"thai": "อึก... ภาชนะที่ไม่สมบูรณ์... แต่เจ้าเองก็... จะกลายเป็นส่วนหนึ่งของข้าในไม่ช้า ชะตากรรมที่ไม่อาจหลีกเลี่ยง...",
						"hindi": "उफ़... एक अपूर्ण पात्र... लेकिन तुम भी... जल्द ही मेरा हिस्सा बन जाओगे। एक अपरिहार्य भाग्य..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "글라세의 몸에서 검은 기운이 흩어지고, 정령은 쓰러진 채 미약하게 빛났다.",
						"english": "Dark energy dispersed from Glace's body, and the spirit lay fallen, faintly glowing.",
						"japanese": "グラッセの体から黒い気が散り、精霊は倒れたまま微かに輝いた。",
						"chinese": "黑色气息从格拉斯的身体中散去，精灵倒在地上，微弱地闪烁着。",
						"french": "Une énergie sombre se dispersa du corps de Glace, et l'esprit gisait, faiblement lumineux.",
						"spanish": "La energía oscura se dispersó del cuerpo de Glace, y el espíritu yacía caído, brillando débilmente.",
						"vietnamese": "Năng lượng đen tối tan biến khỏi cơ thể Glace, và linh hồn nằm gục, phát sáng yếu ớt.",
						"thai": "พลังงานสีดำกระจายออกจากร่างของกลาเซ และวิญญาณก็ล้มลงเรืองแสงจางๆ",
						"hindi": "ग्लेस के शरीर से काली ऊर्जा छितर गई, और आत्मा गिरी हुई, मंद-मंद चमक रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "글라세... 무사해서 다행이야.",
						"english": "Glace... I'm glad you're safe.",
						"japanese": "グラッセ… 無事でよかった。",
						"chinese": "格拉斯……你没事真是太好了。",
						"french": "Glace... Je suis content que tu sois sain et sauf.",
						"spanish": "Glace... Me alegro de que estés a salvo.",
						"vietnamese": "Glace... May quá, em an toàn rồi.",
						"thai": "กลาเซ่... โชคดีนะที่เธอปลอดภัย",
						"hindi": "ग्लेस... शुक्र है तुम सुरक्षित हो।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "겨우 막았지만... 또 다른 그림자가 다가오고 있어. 이 끝없는 굴레를... 끊어야 해.",
						"english": "We barely stopped it... but another shadow approaches. We must break this endless cycle.",
						"japanese": "かろうじて食い止めたが… また別の影が迫っている。この終わりのない輪廻を… 断ち切らねば。",
						"chinese": "勉强挡住了……但另一个阴影正在逼近。必须打破这个无尽的循环。",
						"french": "Nous l'avons à peine arrêté... mais une autre ombre approche. Nous devons briser ce cycle sans fin.",
						"spanish": "Apenas lo detuvimos... pero otra sombra se acerca. Debemos romper este ciclo interminable.",
						"vietnamese": "Chúng ta vừa ngăn được nó... nhưng một bóng tối khác đang đến gần. Phải phá vỡ vòng luẩn quẩn không hồi kết này.",
						"thai": "เราหยุดมันได้แค่ชั่วคราว... แต่อีกเงาหนึ่งกำลังใกล้เข้ามา เราต้องทำลายวงจรที่ไม่มีที่สิ้นสุดนี้",
						"hindi": "हमने इसे मुश्किल से रोका... लेकिन एक और परछाई आ रही है। हमें इस अंतहीन चक्र को तोड़ना होगा।"
					},
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "녹아내린 땅은 잠시 침묵했다. 하지만 세계를 옥죄는 고대 존재의 속삭임은 멈추지 않았다.",
						"english": "The melting land fell silent for a moment. But the whispers of the ancient entity, tightening its grip on the world, did not cease.",
						"japanese": "溶けゆく大地は束の間沈黙した。しかし、世界を締め付ける古き存在の囁きは止まなかった。",
						"chinese": "融化的土地短暂地沉默了。但束缚着世界的古老存在的低语并未停止。",
						"french": "La terre fondante se tut un instant. Mais les murmures de l'entité ancienne, resserrant son étreinte sur le monde, ne cessèrent pas.",
						"spanish": "La tierra derretida quedó en silencio por un momento. Pero los susurros de la entidad ancestral, apretando su agarre sobre el mundo, no cesaron.",
						"vietnamese": "Mảnh đất tan chảy im lặng trong giây lát. Nhưng những lời thì thầm của thực thể cổ xưa, đang siết chặt thế giới, không hề ngừng lại.",
						"thai": "ดินแดนที่ละลายหายไปเงียบลงชั่วขณะ แต่เสียงกระซิบของสิ่งมีชีวิตโบราณที่กำลังรัดรึงโลกกลับไม่หยุดลง",
						"hindi": "पिघली हुई ज़मीन एक पल के लिए खामोश हो गई। लेकिन दुनिया पर अपनी पकड़ कसने वाली प्राचीन सत्ता की फुसफुसाहट बंद नहीं हुई।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항... 네 운명은 이미 정해졌다. 모든 것이 어둠에 굴복할 것이다.",
						"english": "Futile resistance... Your destiny is already sealed. All will succumb to darkness.",
						"japanese": "取るに足らない抵抗… お前の運命はすでに決まっている。すべてが闇に屈するだろう。",
						"chinese": "无谓的抵抗……你的命运早已注定。一切都将臣服于黑暗。",
						"french": "Résistance futile... Ton destin est déjà scellé. Tout succombera à l'obscurité.",
						"spanish": "Resistencia inútil... Tu destino ya está sellado. Todo sucumbirá a la oscuridad.",
						"vietnamese": "Sự kháng cự vô ích... Số phận của ngươi đã được định đoạt. Tất cả sẽ khuất phục bóng tối.",
						"thai": "การต่อต้านที่ไร้ค่า... ชะตากรรมของเจ้าถูกกำหนดไว้แล้ว ทุกสิ่งจะยอมจำนนต่อความมืดมิด",
						"hindi": "निरर्थक प्रतिरोध... तुम्हारा भाग्य पहले ही तय हो चुका है। सब कुछ अँधेरे के आगे झुक जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직... 끝나지 않았어! 다시 일어설 거야!",
						"english": "It's not... over yet! I'll rise again!",
						"japanese": "まだ… 終わってない！ また立ち上がる！",
						"chinese": "还没……结束！我还会再站起来！",
						"french": "Ce n'est pas... encore fini ! Je me relèverai !",
						"spanish": "¡Aún no... ha terminado! ¡Me levantaré de nuevo!",
						"vietnamese": "Vẫn chưa... kết thúc! Ta sẽ đứng dậy lần nữa!",
						"thai": "ยัง... ไม่จบ! ฉันจะลุกขึ้นสู้อีกครั้ง!",
						"hindi": "अभी... खत्म नहीं हुआ! मैं फिर से उठ खड़ा हूँगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그래, 그래. 분노는 좋지. 다음엔 더 강한 고통을 안겨주마. 기대하마...",
						"english": "Yes, yes. Rage is good. Next time, I'll inflict even greater pain. I await it...",
						"japanese": "そう、そう。怒りは良い。次はもっと強い苦痛を与えてやろう。楽しみに待っているぞ…",
						"chinese": "是，是。愤怒很好。下次，我会带来更强的痛苦。拭目以待吧……",
						"french": "Oui, oui. La rage est bonne. La prochaine fois, je t'infligerai une douleur encore plus grande. J'attends ça...",
						"spanish": "Sí, sí. La ira es buena. La próxima vez, te infligiré un dolor aún mayor. Lo espero...",
						"vietnamese": "Đúng vậy, đúng vậy. Giận dữ là tốt. Lần tới, ta sẽ mang đến nỗi đau lớn hơn nữa. Hãy chờ xem...",
						"thai": "ใช่แล้ว ใช่แล้ว ความโกรธเป็นสิ่งที่ดี ครั้งหน้า ข้าจะมอบความเจ็บปวดที่รุนแรงยิ่งกว่าให้ รอเลย...",
						"hindi": "हाँ, हाँ। गुस्सा अच्छा है। अगली बार, मैं और भी अधिक दर्द दूँगा। इंतज़ार करूँगा..."
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"녹아내린 얼음 아래, 고대의 속삭임이 다시 깨어났다.",
			"순수한 얼음 정령 글라세마저 그 손아귀에 잠식당하고.",
			"아스트리엘의 눈동자에는, 잊고 싶었던 과거의 악몽이 되살아났다.",
			"운명의 굴레는 잔혹하게, 다시 그녀를 옥죄어왔다."
		],
		"english": [
			"Beneath the melted ice, an ancient whisper reawakened.",
			"Even Glace, the pure ice spirit, was consumed by its grasp.",
			"In Astriel's eyes, the nightmare of a past she wished to forget resurfaced.",
			"The cruel chains of fate, once again, tightened around her."
		],
		"japanese": [
			"溶け落ちた氷の下、古の囁きが再び目覚めた。",
			"純粋な氷の精霊グラッセさえも、その手に囚われた。",
			"アストリエルの瞳には、忘れたい過去の悪夢が蘇った。",
			"運命の鎖は残酷にも、再び彼女を縛りつけた。"
		],
		"chinese": [
			"融化的冰层之下，古老的低语再次苏醒。",
			"连纯洁的冰之精灵格拉丝，也被其魔爪侵蚀。",
			"在阿斯特丽尔的眼中，那段渴望遗忘的过去噩梦再次浮现。",
			"命运的桎梏残忍地，再次束缚了她。"
		],
		"french": [
			"Sous la glace fondue, un murmure ancien s'est réveillé.",
			"Même Glace, l'esprit pur de la glace, fut engloutie par son emprise.",
			"Dans les yeux d'Astriel, le cauchemar d'un passé qu'elle voulait oublier refit surface.",
			"Les cruelles chaînes du destin se resserrèrent à nouveau autour d'elle."
		],
		"spanish": [
			"Bajo el hielo derretido, un antiguo susurro ha despertado de nuevo.",
			"Incluso Glace, el espíritu puro del hielo, fue devorada por su agarre.",
			"En los ojos de Astriel, la pesadilla de un pasado que quería olvidar resurgió.",
			"Las crueles cadenas del destino, una vez más, la oprimieron."
		],
		"vietnamese": [
			"Bên dưới lớp băng tan, một lời thì thầm cổ xưa lại thức tỉnh.",
			"Ngay cả Glace, tinh linh băng thuần khiết, cũng bị nuốt chửng bởi sự chiếm giữ của nó.",
			"Trong đôi mắt Astriel, cơn ác mộng của quá khứ mà cô muốn quên đã hiện về.",
			"Xích xiềng nghiệt ngã của số phận, một lần nữa, siết chặt lấy cô."
		],
		"thai": [
			"ใต้ธารน้ำแข็งที่ละลาย กระซิบโบราณได้ตื่นขึ้นอีกครั้ง",
			"แม้แต่กลาเซ่ วิญญาณน้ำแข็งบริสุทธิ์ ก็ยังถูกกลืนกินโดยอำนาจนั้น",
			"ในดวงตาของแอสเทรียล ฝันร้ายในอดีตที่เธออยากลืมกลับคืนมา",
			"โซ่ตรวนแห่งโชคชะตาอันโหดร้าย กลับมารัดเธออีกครั้ง"
		],
		"hindi": [
			"पिघली हुई बर्फ़ के नीचे, एक प्राचीन फुसफुसाहट फिर से जाग उठी।",
			"यहां तक कि ग्लेस, शुद्ध बर्फ़ की आत्मा भी, उसकी पकड़ में समा गई।",
			"एस्ट्रियल की आँखों में, एक ऐसे अतीत का दुःस्वप्न फिर से जीवित हो उठा जिसे वह भूलना चाहती थी।",
			"भाग्य की क्रूर बेड़ियाँ, एक बार फिर, उसे कसकर जकड़ लीं।"
		]
	}
} as const;
