export const scenario_forest_sloth_echo_05 = {
	"scenario_id": "forest_sloth_echo_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "pool_017"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "모든 활력이 멈춘 듯한 공간. 고요함이 모든 것을 집어삼킨다.",
						"english": "A space where all vitality seems to have stopped. Stillness devours everything.",
						"japanese": "すべての活力が止まったかのような空間。静寂がすべてを飲み込む。",
						"chinese": "一个所有活力似乎都已停止的空间。寂静吞噬着一切。",
						"french": "Un espace où toute vitalité semble s'être arrêtée. La quiétude dévore tout.",
						"spanish": "Un espacio donde toda vitalidad parece haberse detenido. La quietud lo devora todo.",
						"vietnamese": "Một không gian nơi mọi sức sống dường như đã ngừng lại. Sự tĩnh lặng nuốt chửng mọi thứ.",
						"thai": "พื้นที่ที่พลังชีวิตทั้งหมดหยุดนิ่ง ความเงียบงันกลืนกินทุกสิ่ง",
						"hindi": "एक ऐसी जगह जहाँ सारी जीवन शक्ति रुक गई है। नीरवता सब कुछ निगल लेती है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "숨쉬기도 힘들어… 심장이 느려지는 것 같아.",
						"english": "It's hard to breathe... My heart feels like it's slowing down.",
						"japanese": "息をするのも苦しい… 心臓が遅くなっているみたいだ。",
						"chinese": "呼吸都困难… 心脏好像慢下来了。",
						"french": "Difficile de respirer… Mon cœur semble ralentir.",
						"spanish": "Me cuesta respirar… Siento que mi corazón se ralentiza.",
						"vietnamese": "Khó thở quá… Tim tôi dường như đang chậm lại.",
						"thai": "หายใจลำบาก... หัวใจเหมือนจะเต้นช้าลง",
						"hindi": "सांस लेना भी मुश्किल है… मेरा दिल धीमा होता जा रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela"
				},
				{
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "이게… 슬로우의 힘. '안식'이라는 이름의 죽음이야.",
						"english": "This is... Slow's power. Death named 'Rest'.",
						"japanese": "これが… スロウの力。『安息』という名の死だ。",
						"chinese": "这就是… 斯洛的力量。名为“安息”的死亡。",
						"french": "C'est ça… le pouvoir de Slow. La mort nommée 'Repos'.",
						"spanish": "Este es… el poder de Slow. La muerte llamada 'Descanso'.",
						"vietnamese": "Đây là… sức mạnh của Slow. Cái chết mang tên 'An nghỉ'.",
						"thai": "นี่คือ... พลังของสโลว์ ความตายที่ชื่อว่า 'การพักผ่อน'",
						"hindi": "यह है… स्लो की शक्ति। 'विश्राम' नाम की मृत्यु।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "모두가 다시 무기력에 빠질 거야. 이대로는 안 돼.",
						"english": "Everyone will fall back into apathy. We can't let this happen.",
						"japanese": "皆が再び無気力に陥るだろう。このままではいけない。",
						"chinese": "所有人都会再次陷入无力。不能这样下去。",
						"french": "Tout le monde retombera dans l'apathie. Ça ne peut pas continuer comme ça.",
						"spanish": "Todos volverán a caer en la apatía. No podemos dejar que esto pase.",
						"vietnamese": "Mọi người sẽ lại rơi vào sự thờ ơ. Không thể cứ thế này được.",
						"thai": "ทุกคนจะกลับไปสู่ความเฉยเมยอีกครั้ง ปล่อยไว้แบบนี้ไม่ได้",
						"hindi": "सब फिर से उदासीनता में डूब जाएंगे। ऐसे नहीं चलेगा।"
					},
					"emotion": "angry",
					"speaker": "ela"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "슬로우는 세상을 '안식'시키려 해. 불균형과 혼돈을 없애겠다면서.",
						"english": "Slow seeks to 'rest' the world. Claiming to eliminate imbalance and chaos.",
						"japanese": "スロウは世界を『安息』させようとしている。不均衡と混沌をなくすと言いながら。",
						"chinese": "斯洛试图让世界“安息”。声称要消除不平衡和混乱。",
						"french": "Slow veut 'apaiser' le monde. Prétendant éliminer le déséquilibre et le chaos.",
						"spanish": "Slow intenta 'reposar' el mundo. Diciendo que eliminará el desequilibrio y el caos.",
						"vietnamese": "Slow muốn 'an nghỉ' thế giới. Nói rằng sẽ loại bỏ sự mất cân bằng và hỗn loạn.",
						"thai": "สโลว์พยายาม 'พักผ่อน' โลก โดยอ้างว่าจะขจัดความไม่สมดุลและความสับสนวุ่นวาย",
						"hindi": "स्लो दुनिया को 'आराम' देना चाहता है। असंतुलन और अराजकता को खत्म करने का दावा करता है।"
					}
				},
				{
					"content": {
						"korean": "그럼 우리가 싸웠던 건… 잘못된 거였어?",
						"english": "So, what we fought for... was wrong?",
						"japanese": "じゃあ、私たちが戦ったことは… 間違っていたの？",
						"chinese": "那么，我们一直以来的战斗… 是错的吗？",
						"french": "Alors, tout ce pour quoi nous nous sommes battus… était faux ?",
						"spanish": "¿Entonces, por lo que luchamos… estaba mal?",
						"vietnamese": "Vậy, những gì chúng ta đã chiến đấu… là sai ư?",
						"thai": "งั้นสิ่งที่เราต่อสู้มา... ผิดเหรอ?",
						"hindi": "तो, जिसके लिए हमने लड़ाई लड़ी… वह गलत था?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 슬로우의 방식은 모든 생명을 멈추는 거야. 진정한 안식이 아니야.",
						"english": "No. Slow's method is to stop all life. That's not true rest.",
						"japanese": "違う。スロウのやり方は全ての生命を止めることだ。真の安息じゃない。",
						"chinese": "不。斯洛的方式是让所有生命停止。那不是真正的安息。",
						"french": "Non. La méthode de Slow est d'arrêter toute vie. Ce n'est pas un vrai repos.",
						"spanish": "No. El método de Slow es detener toda vida. Eso no es un verdadero descanso.",
						"vietnamese": "Không. Cách của Slow là dừng mọi sự sống. Đó không phải là sự an nghỉ thực sự.",
						"thai": "ไม่ใช่ วิธีของสโลว์คือการหยุดทุกชีวิต นั่นไม่ใช่การพักผ่อนที่แท้จริง",
						"hindi": "नहीं। स्लो का तरीका सभी जीवन को रोकना है। वह सच्चा विश्राम नहीं है।"
					},
					"emotion": "angry",
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "세상의 혼란을 흡수하던 힘이 역류해서 퍼지고 있어.",
						"english": "The power that absorbed the world's chaos is now overflowing and spreading.",
						"japanese": "世界の混乱を吸収していた力が逆流して広がっている。",
						"chinese": "吸收世界混乱的力量正在逆流扩散。",
						"french": "Le pouvoir qui absorbait le chaos du monde déborde et se répand.",
						"spanish": "El poder que absorbía el caos del mundo está ahora desbordándose y extendiéndose.",
						"vietnamese": "Sức mạnh từng hấp thụ sự hỗn loạn của thế giới giờ đang chảy ngược và lan rộng.",
						"thai": "พลังที่เคยดูดซับความวุ่นวายของโลกกำลังไหลย้อนกลับและแพร่กระจาย",
						"hindi": "दुनिया की अराजकता को सोखने वाली शक्ति अब उलटी होकर फैल रही है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "사람들은 고통스러워하면서도… 숲의 고요함을 그리워하고 있어.",
						"english": "People suffer, yet... they long for the forest's tranquility.",
						"japanese": "人々は苦しみながらも… 森の静けさを恋しがっている。",
						"chinese": "人们在痛苦中… 却又渴望着森林的宁静。",
						"french": "Les gens souffrent, et pourtant… ils aspirent à la tranquillité de la forêt.",
						"spanish": "La gente sufre, y sin embargo… anhela la tranquilidad del bosque.",
						"vietnamese": "Mọi người đau khổ, nhưng… lại khao khát sự tĩnh lặng của rừng.",
						"thai": "ผู้คนเจ็บปวด แต่... พวกเขากลับโหยหาความสงบของป่า",
						"hindi": "लोग दुख में हैं, फिर भी… वे जंगल की शांति के लिए तरस रहे हैं।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "중독이라는 거야?",
						"english": "Is it an addiction?",
						"japanese": "中毒だというの？",
						"chinese": "这是一种成瘾吗？",
						"french": "C'est une addiction ?",
						"spanish": "¿Es una adicción?",
						"vietnamese": "Đây là sự nghiện ngập ư?",
						"thai": "นี่คือการเสพติดเหรอ?",
						"hindi": "क्या यह एक लत है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ela",
					"emotion": "angry",
					"content": {
						"korean": "응. 고요함은 달콤한 독. 너희의 의지마저 갉아먹을 거야.",
						"english": "Yes. Tranquility is a sweet poison. It will even erode your will.",
						"japanese": "ええ。静けさは甘い毒。お前たちの意志さえ蝕むだろう。",
						"chinese": "是的。宁静是甜美的毒药。它甚至会侵蚀你们的意志。",
						"french": "Oui. La tranquillité est un doux poison. Elle rongera même votre volonté.",
						"spanish": "Sí. La tranquilidad es un dulce veneno. Incluso erosionará vuestra voluntad.",
						"vietnamese": "Phải. Sự tĩnh lặng là một thứ độc ngọt ngào. Nó thậm chí sẽ ăn mòn ý chí của các ngươi.",
						"thai": "ใช่ ความสงบคือยาพิษอันหอมหวาน มันจะกัดกินแม้กระทั่งเจตจำนงของพวกเจ้า",
						"hindi": "हाँ। शांति एक मीठा ज़हर है। यह तुम्हारी इच्छाशक्ति को भी मिटा देगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "막아야 해. 여기서 멈출 순 없어.",
						"english": "We have to stop this. We can't stop here.",
						"japanese": "止めなければならない。ここで止まるわけにはいかない。",
						"chinese": "必须阻止。不能就此停下。",
						"french": "Il faut l'arrêter. On ne peut pas s'arrêter ici.",
						"spanish": "Hay que detenerlo. No podemos parar aquí.",
						"vietnamese": "Phải ngăn chặn. Không thể dừng lại ở đây.",
						"thai": "ต้องหยุดมันให้ได้ จะหยุดแค่นี้ไม่ได้",
						"hindi": "इसे रोकना होगा। हम यहां रुक नहीं सकते।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고요함의 메아리가 발걸음을 붙잡는 듯하다.",
						"english": "The echoes of silence seem to halt my steps.",
						"japanese": "静寂のこだまが足取りを捕らえるようだ。",
						"chinese": "寂静的回声似乎束缚了脚步。",
						"french": "L'écho du silence semble retenir mes pas.",
						"spanish": "El eco del silencio parece detener mis pasos.",
						"vietnamese": "Tiếng vọng của sự tĩnh lặng dường như níu giữ bước chân.",
						"thai": "เสียงสะท้อนของความเงียบสงัดราวกับตรึงฝีเท้าไว้",
						"hindi": "खामोशी की गूँज कदमों को थामे हुए लगती है।"
					}
				},
				{
					"speaker": "ela",
					"action": "enter",
					"spot": [
						2,
						4
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "점점 더 강해지는 것 같아… 그래도 난 이제 무기력하지 않아.",
						"english": "It seems to be getting stronger... but I'm not helpless anymore.",
						"japanese": "だんだん強くなっているようだ…それでも私はもう無力ではない。",
						"chinese": "似乎越来越强了…但我已不再无力。",
						"french": "Ça semble devenir plus fort… mais je ne suis plus impuissant.",
						"spanish": "Parece que se está volviendo más fuerte… pero ya no soy impotente.",
						"vietnamese": "Dường như nó đang mạnh hơn… nhưng tôi không còn bất lực nữa.",
						"thai": "ดูเหมือนจะแข็งแกร่งขึ้นเรื่อยๆ… แต่ฉันไม่ไร้หนทางอีกต่อไปแล้ว",
						"hindi": "यह और मजबूत होता जा रहा है… लेकिन मैं अब बेबस नहीं हूँ।"
					}
				},
				{
					"content": {
						"korean": "엘라…!",
						"english": "Ella...!",
						"japanese": "エラ…！",
						"chinese": "艾拉…！",
						"french": "Ella… !",
						"spanish": "¡Ella…!",
						"vietnamese": "Ella…!",
						"thai": "เอลล่า…!",
						"hindi": "एला…!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "슬로우의 '안식'이 우리에게 '평화'를 줄 거라 믿었던 과거의 나처럼 되지 마.",
						"english": "Don't become like my past self, who believed Slow's 'Rest' would bring us 'Peace.'",
						"japanese": "スロウの「安息」が私たちに「平和」をもたらすと信じていた過去の私にはならないで。",
						"chinese": "不要变成过去的我，那个相信斯洛的“安息”会带给我们“和平”的我。",
						"french": "Ne deviens pas comme mon moi passé, qui croyait que le 'Repos' de Slow nous apporterait la 'Paix'.",
						"spanish": "No te conviertas en mi yo del pasado, que creyó que el 'Descanso' de Slow nos traería la 'Paz'.",
						"vietnamese": "Đừng trở thành tôi của quá khứ, người đã tin rằng 'An nghỉ' của Slow sẽ mang lại 'Hòa bình' cho chúng ta.",
						"thai": "อย่ากลายเป็นตัวฉันในอดีตที่เชื่อว่า 'การพักผ่อน' ของสโลว์จะนำ 'สันติภาพ' มาให้เรา",
						"hindi": "मेरे अतीत की तरह मत बनो, जिसने माना था कि स्लो का 'आराम' हमें 'शांति' देगा।"
					},
					"type": "speech",
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…진정한 평화를 찾을 거야.",
						"english": "...I will find true peace.",
						"japanese": "…真の平和を見つけるだろう。",
						"chinese": "…我会找到真正的和平。",
						"french": "…Je trouverai la vraie paix.",
						"spanish": "…Encontraré la verdadera paz.",
						"vietnamese": "…Tôi sẽ tìm thấy hòa bình đích thực.",
						"thai": "…ฉันจะค้นพบสันติภาพที่แท้จริง",
						"hindi": "…मैं सच्ची शांति पाऊँगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 고요함이 모든 것을 덮쳤다. 슬로우가 그 중심에 있었다.",
						"english": "A colossal silence enveloped everything. Slow was at its center.",
						"japanese": "巨大な静寂がすべてを覆った。スロウがその中心にいた。",
						"chinese": "巨大的寂静笼罩了一切。斯洛是其中心。",
						"french": "Un silence colossal a tout enveloppé. Slow était en son centre.",
						"spanish": "Un silencio colosal lo cubrió todo. Slow estaba en su centro.",
						"vietnamese": "Một sự tĩnh lặng khổng lồ bao trùm mọi thứ. Slow ở trung tâm của nó.",
						"thai": "ความเงียบงันมหาศาลปกคลุมทุกสิ่ง สโลว์อยู่ใจกลางนั้น",
						"hindi": "एक विशाल खामोशी ने सब कुछ ढक लिया। स्लो उसके केंद्र में था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "왔구나. 너희에게 진정한 평화를 되찾아줄 시간이다.",
						"english": "You've come. It's time to restore true peace to you.",
						"japanese": "来たか。お前たちに真の平和を取り戻してやる時だ。",
						"chinese": "你们来了。是时候为你们找回真正的和平了。",
						"french": "Vous êtes venus. Il est temps de vous rendre la vraie paix.",
						"spanish": "Habéis venido. Es hora de devolveros la verdadera paz.",
						"vietnamese": "Các ngươi đã đến. Đã đến lúc mang lại hòa bình đích thực cho các ngươi.",
						"thai": "มาแล้วสินะ ได้เวลาที่จะนำสันติภาพที่แท้จริงกลับคืนมาให้พวกเจ้าแล้ว",
						"hindi": "तुम आ गए। यह तुम्हें सच्ची शांति लौटाने का समय है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 평화는 강요된 죽음일 뿐이야!",
						"english": "That peace is merely forced death!",
						"japanese": "その平和は強要された死にすぎない！",
						"chinese": "那种和平不过是强加的死亡！",
						"french": "Cette paix n'est qu'une mort forcée !",
						"spanish": "¡Esa paz es solo una muerte forzada!",
						"vietnamese": "Hòa bình đó chỉ là cái chết bị ép buộc!",
						"thai": "สันติภาพนั้นเป็นเพียงความตายที่ถูกบังคับ!",
						"hindi": "वह शांति केवल थोपी हुई मृत्यु है!"
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "무지한 자여. 고통과 번뇌 없는 '무위의 안식처'가 곧 자유다.",
						"english": "Ignorant one. The 'Haven of Inaction' without pain and suffering is true freedom.",
						"japanese": "無知なる者よ。苦痛と煩悩のない「無為の安息所」こそが自由だ。",
						"chinese": "无知者。没有痛苦和烦恼的“无为安息所”才是自由。",
						"french": "Ignorant. Le 'Refuge de l'Inaction' sans douleur ni souffrance est la liberté.",
						"spanish": "Necio. El 'Refugio de la Inacción' sin dolor ni sufrimiento es la libertad.",
						"vietnamese": "Kẻ ngu dốt. 'Nơi an nghỉ của vô vi' không có đau khổ và phiền não chính là tự do.",
						"thai": "ผู้โง่เขลา 'ที่พำนักแห่งความสงบ' ที่ปราศจากความเจ็บปวดและความทุกข์ระทมคืออิสรภาพที่แท้จริง",
						"hindi": "अज्ञानी। दर्द और कष्ट रहित 'निष्क्रियता का आश्रय' ही स्वतंत्रता है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela"
				},
				{
					"speaker": "ela",
					"emotion": "angry",
					"content": {
						"korean": "아니! 그건 도피일 뿐이야! 스스로 쟁취하는 게 진정한 자유야!",
						"english": "No! That's just an escape! True freedom is earned!",
						"japanese": "いいえ！それはただの逃避に過ぎない！自ら勝ち取るのが真の自由だ！",
						"chinese": "不！那只是逃避！真正的自由是自己争取来的！",
						"french": "Non ! Ce n'est qu'une fuite ! La vraie liberté se gagne soi-même !",
						"spanish": "¡No! ¡Eso es solo una evasión! ¡La verdadera libertad se gana con esfuerzo!",
						"vietnamese": "Không! Đó chỉ là trốn tránh! Tự mình giành lấy mới là tự do thật sự!",
						"thai": "ไม่! นั่นมันแค่การหลบหนีเท่านั้น! การไขว่คว้ามาด้วยตัวเองคืออิสรภาพที่แท้จริง!",
						"hindi": "नहीं! वह तो बस पलायन है! सच्ची आज़ादी खुद अर्जित की जाती है!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…결국, 너희는 또 '혼란'을 택하는구나. 언젠가 이 '평화'를 갈구할 것이다…",
						"english": "...Ultimately, you choose 'chaos' again. Someday, you will crave this 'peace'...",
						"japanese": "…結局、お前たちはまた「混沌」を選ぶのか。いつかこの「平和」を渇望するだろう…",
						"chinese": "……最终，你们还是选择了“混乱”。总有一天，你们会渴望这份“平静”……",
						"french": "...Finalement, vous choisissez encore le \"chaos\". Un jour, vous aspirerez à cette \"paix\"...",
						"spanish": "...Al final, volvéis a elegir el \"caos\". Algún día, ansiaréis esta \"paz\"...",
						"vietnamese": "...Cuối cùng, các ngươi lại chọn 'hỗn loạn'. Một ngày nào đó, các ngươi sẽ khao khát 'bình yên' này...",
						"thai": "...ในที่สุด พวกเจ้าก็เลือก 'ความโกลาหล' อีกครั้ง วันหนึ่ง เจ้าจะต้องโหยหา 'สันติภาพ' นี้...",
						"hindi": "...अंततः, तुम फिर से 'अशांति' चुनते हो। किसी दिन, तुम इस 'शांति' के लिए तरसोगे..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 우리는 스스로의 길을 택할 거야.",
						"english": "No. We will choose our own path.",
						"japanese": "いや。我々は自らの道を選ぶ。",
						"chinese": "不。我们会选择自己的道路。",
						"french": "Non. Nous choisirons notre propre voie.",
						"spanish": "No. Elegiremos nuestro propio camino.",
						"vietnamese": "Không. Chúng tôi sẽ chọn con đường của riêng mình.",
						"thai": "ไม่ เราจะเลือกเส้นทางของเราเอง",
						"hindi": "नहीं। हम अपना रास्ता खुद चुनेंगे।"
					},
					"emotion": "happy",
					"speaker": "character_any"
				},
				{
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"emotion": "happy",
					"content": {
						"korean": "우리의 활력은… 멈추지 않아!",
						"english": "Our vitality... will not stop!",
						"japanese": "我々の活力は… 止まらない！",
						"chinese": "我们的活力……永不停止！",
						"french": "Notre vitalité... ne s'arrêtera pas !",
						"spanish": "¡Nuestra vitalidad... no se detendrá!",
						"vietnamese": "Sức sống của chúng ta... sẽ không dừng lại!",
						"thai": "พลังชีวิตของเรา... จะไม่หยุด!",
						"hindi": "हमारी शक्ति... रुकेगी नहीं!"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "고요함은 서서히 물러갔다. 하지만 세상은 그 선택의 무게를 짊어져야 했다.",
						"english": "The stillness slowly receded. But the world had to bear the weight of that choice.",
						"japanese": "静寂はゆっくりと遠のいた。しかし世界はその選択の重みを背負わねばならなかった。",
						"chinese": "寂静渐渐退去。然而世界必须承受那份选择的重担。",
						"french": "Le calme recula lentement. Mais le monde dut supporter le poids de ce choix.",
						"spanish": "La quietud se retiró lentamente. Pero el mundo tuvo que soportar el peso de esa elección.",
						"vietnamese": "Sự tĩnh lặng dần rút lui. Nhưng thế giới phải gánh chịu sức nặng của sự lựa chọn đó.",
						"thai": "ความเงียบสงบได้จางหายไปช้าๆ แต่โลกก็ต้องแบกรับน้ำหนักของการเลือกนั้น",
						"hindi": "शांति धीरे-धीरे कम हो गई। लेकिन दुनिया को उस चुनाव का बोझ उठाना पड़ा।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "압도적인 고요함 속에 모든 움직임이 멈췄다.",
						"english": "In overwhelming stillness, all movement ceased.",
						"japanese": "圧倒的な静寂の中、全ての動きが止まった。",
						"chinese": "在压倒性的寂静中，所有运动都停止了。",
						"french": "Dans un calme écrasant, tout mouvement cessa.",
						"spanish": "En una quietud abrumadora, todo movimiento cesó.",
						"vietnamese": "Trong sự tĩnh lặng choáng ngợp, mọi chuyển động đều ngừng lại.",
						"thai": "ในความเงียบสงบที่ครอบงำ ทุกการเคลื่อนไหวหยุดนิ่ง",
						"hindi": "अभिभूत कर देने वाली शांति में, सारी हलचल थम गई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것이 너희가 그토록 원했던 '평화'다. 영원히 쉬어라.",
						"english": "This is the 'peace' you so desired. Rest forever.",
						"japanese": "これがお前たちが切望した「平和」だ。永遠に休め。",
						"chinese": "这就是你们所渴望的“平静”。永远安息吧。",
						"french": "C'est la \"paix\" que vous désiriez tant. Reposez en paix pour toujours.",
						"spanish": "Esta es la \"paz\" que tanto deseabais. Descansad para siempre.",
						"vietnamese": "Đây là 'bình yên' mà các ngươi hằng mong ước. Hãy nghỉ ngơi vĩnh viễn đi.",
						"thai": "นี่คือ 'สันติภาพ' ที่พวกเจ้าปรารถนานัก จงพักผ่อนไปตลอดกาล",
						"hindi": "यही वह 'शांति' है जिसकी तुम्हें इतनी इच्छा थी। हमेशा के लिए आराम करो।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아…!",
						"english": "It's not over yet... I won't give up...!",
						"japanese": "まだ…終わってない。諦めない…！",
						"chinese": "还没……结束。我不会放弃……！",
						"french": "Ce n'est pas encore fini... Je n'abandonnerai pas...!",
						"spanish": "Aún... no ha terminado. ¡No me rendiré...!",
						"vietnamese": "Vẫn chưa... kết thúc đâu. Tôi sẽ không bỏ cuộc...!",
						"thai": "ยัง... ไม่จบ ไม่ยอมแพ้...!",
						"hindi": "अभी... खत्म नहीं हुआ। मैं हार नहीं मानूँगा...!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"고요함은 걷혔지만, 세상은 선택의 기로에 섰다.",
			"활력을 되찾았지만, 그 대가로 무엇을 잃었는지 아무도 알 수 없었다.",
			"슬로우의 '안식'은 사라졌지만, 그 잔재는 여전히 사람들의 마음속에 남아.",
			"과연 이 자유는 축복일까, 또 다른 혼란의 시작일까.",
			"세상은 다시, 느리게 움직이기 시작했다."
		],
		"english": [
			"The stillness lifted, but the world stood at a crossroads.",
			"Vitality returned, but no one knew what was lost in exchange.",
			"Slow's 'Rest' vanished, but its remnants lingered in people's hearts.",
			"Was this freedom a blessing, or the beginning of another chaos?",
			"The world, once again, began to move slowly."
		],
		"japanese": [
			"静寂は晴れたが、世界は選択の岐路に立たされた。",
			"活力を取り戻したが、その代償として何を失ったのか、誰も知る由もなかった。",
			"スロウの「安息」は消え去ったが、その残滓は人々の心の中に残り続けた。",
			"果たしてこの自由は祝福なのか、それとも新たな混乱の始まりなのか。",
			"世界は再び、ゆっくりと動き始めた。"
		],
		"chinese": [
			"寂静消散了，但世界站在了选择的十字路口。",
			"活力回来了，但没有人知道为此失去了什么。",
			"斯洛的“安息”消失了，但其残余仍留在人们的心中。",
			"究竟这份自由是祝福，还是另一场混乱的开始？",
			"世界再次，缓慢地开始运转。"
		],
		"french": [
			"La quiétude s'est dissipée, mais le monde se tenait à la croisée des chemins.",
			"La vitalité est revenue, mais personne ne savait ce qui avait été perdu en échange.",
			"Le 'Repos' de Slow disparut, mais ses vestiges persistaient dans le cœur des gens.",
			"Cette liberté était-elle une bénédiction, ou le début d'un autre chaos ?",
			"Le monde, à nouveau, commença à bouger lentement."
		],
		"spanish": [
			"La quietud se disipó, pero el mundo se encontraba en una encrucijada.",
			"La vitalidad regresó, pero nadie sabía qué se había perdido a cambio.",
			"El 'Descanso' de Slow se desvaneció, pero sus restos perduraron en los corazones de la gente.",
			"¿Fue esta libertad una bendición, o el comienzo de otro caos?",
			"El mundo, una vez más, comenzó a moverse lentamente."
		],
		"vietnamese": [
			"Sự tĩnh lặng đã tan biến, nhưng thế giới đứng trước ngã ba đường.",
			"Sức sống đã trở lại, nhưng không ai biết đã mất đi điều gì đổi lại.",
			"Nghỉ Ngơi' của Slow đã biến mất, nhưng tàn dư của nó vẫn còn đọng lại trong lòng người.",
			"Liệu sự tự do này là một phước lành, hay là khởi đầu của một sự hỗn loạn khác?",
			"Thế giới lại một lần nữa, bắt đầu chuyển động chậm rãi."
		],
		"thai": [
			"ความเงียบงันจางหายไป แต่โลกกลับยืนอยู่บนทางแยก",
			"พลังชีวิตกลับคืนมา แต่ไม่มีใครรู้ว่าต้องแลกด้วยอะไรไป",
			"'การพักผ่อน' ของสโลว์หายไปแล้ว แต่ร่องรอยของมันยังคงอยู่ในใจของผู้คน",
			"เสรีภาพนี้เป็นพร หรือเป็นจุดเริ่มต้นของความสับสนวุ่นวายครั้งใหม่กันแน่",
			"โลกเริ่มเคลื่อนไหวช้าๆ อีกครั้ง"
		],
		"hindi": [
			"नीरवता हट गई, लेकिन दुनिया चौराहे पर खड़ी थी।",
			"जीवन शक्ति लौट आई, लेकिन किसी को नहीं पता था कि बदले में क्या खो गया था।",
			"स्लो का 'आराम' गायब हो गया, लेकिन उसके अवशेष अभी भी लोगों के दिलों में बने हुए थे।",
			"क्या यह स्वतंत्रता एक वरदान थी, या एक और अराजकता की शुरुआत?",
			"दुनिया, फिर से, धीरे-धीरे चलने लगी।"
		]
	},
	"prologue": {
		"korean": [
			"세상은 다시 침묵했다. 아니, '고요함'에 잠식되어갔다.",
			"슬로우가 깨어났다. 모두에게 진정한 '안식'을 선물하겠다며.",
			"하지만 그것은 파멸로 가는 길. 선택의 시간이다.",
			"모든 존재의 활력을 앗아갈 고요함 속에서, 마지막 대결이 시작된다."
		],
		"english": [
			"The world fell silent again. No, it was consumed by 'Stillness'.",
			"Slow awakened, promising true 'Rest' to all.",
			"But that was the path to ruin. It is time to choose.",
			"In the stillness that will steal all vitality from existence, the final confrontation begins."
		],
		"japanese": [
			"世界は再び沈黙した。いや、「静寂」に蝕まれていった。",
			"スロウが目覚めた。すべてに真の「安息」を与えると告げながら。",
			"しかし、それは破滅への道。選択の時だ。",
			"すべての存在の活力を奪い去る静寂の中、最後の対決が始まる。"
		],
		"chinese": [
			"世界再次陷入了沉寂。不，是被“寂静”所侵蚀。",
			"斯洛苏醒了，声称要赐予所有人真正的“安息”。",
			"但那是通往毁灭的道路。是时候做出选择了。",
			"在剥夺所有生命活力的寂静中，最终的对决开始了。"
		],
		"french": [
			"Le monde retomba dans le silence. Non, il était dévoré par la 'Quiétude'.",
			"Slow s'est éveillé, promettant un véritable 'Repos' à tous.",
			"Mais c'était le chemin de la ruine. L'heure est au choix.",
			"Dans la quiétude qui dérobera toute vitalité à l'existence, la confrontation finale commence."
		],
		"spanish": [
			"El mundo volvió a caer en silencio. No, fue devorado por la 'Quietud'.",
			"Slow despertó, prometiendo un verdadero 'Descanso' a todos.",
			"Pero ese era el camino a la ruina. Es tiempo de elegir.",
			"En la quietud que arrebatará toda vitalidad a la existencia, comienza el enfrentamiento final."
		],
		"vietnamese": [
			"Thế giới lại chìm vào im lặng. Không, nó bị sự 'Tĩnh Lặng' nuốt chửng.",
			"Slow đã thức tỉnh, hứa hẹn sẽ ban tặng 'Nghỉ Ngơi' thực sự cho tất cả.",
			"Nhưng đó là con đường dẫn đến diệt vong. Đã đến lúc lựa chọn.",
			"Trong sự tĩnh lặng sẽ cướp đi mọi sức sống của vạn vật, trận đối đầu cuối cùng bắt đầu."
		],
		"thai": [
			"โลกกลับเข้าสู่ความเงียบงันอีกครั้ง ไม่สิ มันถูก 'ความสงบ' กลืนกิน",
			"สโลว์ตื่นขึ้นแล้ว โดยกล่าวว่าจะมอบ 'การพักผ่อน' ที่แท้จริงแก่ทุกคน",
			"แต่นั่นคือหนทางสู่หายนะ ถึงเวลาที่ต้องเลือกแล้ว",
			"ในความเงียบงันที่จะพรากพลังชีวิตจากทุกสรรพสิ่ง การเผชิญหน้าครั้งสุดท้ายเริ่มต้นขึ้น"
		],
		"hindi": [
			"दुनिया फिर से खामोश हो गई। नहीं, यह 'नीरवता' में समा गई।",
			"स्लो जागा, सभी को सच्चा 'आराम' देने का वादा करते हुए।",
			"लेकिन वह विनाश का मार्ग था। यह चुनाव का समय है।",
			"उस नीरवता में जो सभी अस्तित्वों से जीवन शक्ति छीन लेगी, अंतिम टकराव शुरू होता है।"
		]
	}
} as const;
