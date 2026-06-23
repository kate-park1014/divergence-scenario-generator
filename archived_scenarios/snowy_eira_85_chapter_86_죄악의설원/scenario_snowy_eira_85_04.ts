export const scenario_snowy_eira_85_04 = {
	"scenario_id": "snowy_eira_85_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 공기 속에, 낯선 온기가 감돌았다. 이곳은 얼음 정령 에이라의 피난처.",
						"english": "In the cold air, a strange warmth lingered. This was Aira, the Ice Spirit's sanctuary.",
						"japanese": "冷たい空気の中に、見慣れない温もりが漂っていた。ここは氷の精霊アイラの聖域。",
						"chinese": "寒冷的空气中，弥漫着一丝陌生的暖意。这里是冰之精灵艾拉的避难所。",
						"french": "Dans l'air froid, une chaleur étrange flottait. C'était le sanctuaire d'Aira, l'Esprit de Glace.",
						"spanish": "En el aire frío, una extraña calidez persistía. Este era el santuario de Aira, el Espíritu de Hielo.",
						"vietnamese": "Trong không khí lạnh lẽo, một hơi ấm lạ lùng bao trùm. Đây là thánh địa của tinh linh băng giá Aira.",
						"thai": "ในอากาศที่หนาวเย็น ความอบอุ่นแปลกๆ คลุ้งไปทั่ว ที่นี่คือสถานที่ศักดิ์สิทธิ์ของไอรา วิญญาณน้ำแข็ง",
						"hindi": "ठंडी हवा में, एक अजीब सी गर्माहट महसूस हो रही थी। यह हिम आत्मा ऐरा का अभयारण्य था।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영합니다. 이 모든 것이 에이라님이 만든 완벽한 균형이죠.",
						"english": "Welcome. All of this is the perfect balance created by Lady Aira.",
						"japanese": "ようこそ。これらすべては、アイラ様が作り上げた完璧な均衡です。",
						"chinese": "欢迎。这一切都是艾拉大人创造的完美平衡。",
						"french": "Bienvenue. Tout ceci est l'équilibre parfait créé par Dame Aira.",
						"spanish": "Bienvenidos. Todo esto es el equilibrio perfecto creado por Lady Aira.",
						"vietnamese": "Chào mừng. Tất cả điều này là sự cân bằng hoàn hảo được tạo ra bởi Nữ thần Aira.",
						"thai": "ยินดีต้อนรับ ทุกสิ่งนี้คือความสมดุลที่สมบูรณ์แบบที่ท่านไอราสร้างขึ้น",
						"hindi": "स्वागत है। यह सब लेडी ऐरा द्वारा बनाया गया एक उत्तम संतुलन है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "완벽한 균형…?",
						"english": "Perfect balance...?",
						"japanese": "完璧な均衡…？",
						"chinese": "完美平衡…？",
						"french": "Un équilibre parfait...?",
						"spanish": "¿Equilibrio perfecto...?",
						"vietnamese": "Cân bằng hoàn hảo…?",
						"thai": "ความสมดุลที่สมบูรณ์แบบ…?",
						"hindi": "पूर्ण संतुलन...?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "외부의 혼돈을 배제하고, 오직 이곳의 평화만을 위해 존재합니다.",
						"english": "It exists solely for the peace of this place, excluding external chaos.",
						"japanese": "外部の混沌を排除し、ただこの地の平和のためだけに存在します。",
						"chinese": "排除外部的混乱，只为这里的和平而存在。",
						"french": "Il n'existe que pour la paix de ce lieu, excluant le chaos extérieur.",
						"spanish": "Existe únicamente por la paz de este lugar, excluyendo el caos externo.",
						"vietnamese": "Nó tồn tại chỉ vì hòa bình của nơi này, loại trừ hỗn loạn bên ngoài.",
						"thai": "มันมีอยู่เพื่อสันติสุขของที่นี่เท่านั้น โดยไม่รวมความวุ่นวายภายนอก",
						"hindi": "यह बाहरी अराजकता को छोड़कर, केवल इस स्थान की शांति के लिए मौजूद है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "외부 세계는…?",
						"english": "The outside world...?",
						"japanese": "外部世界は…？",
						"chinese": "外部世界…？",
						"french": "Le monde extérieur...?",
						"spanish": "¿El mundo exterior...?",
						"vietnamese": "Thế giới bên ngoài…?",
						"thai": "โลกภายนอก…?",
						"hindi": "बाहरी दुनिया...?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "알 필요 없습니다. 무지가 곧 축복이자, 이 평화를 지키는 유일한 방법입니다.",
						"english": "You don't need to know. Ignorance is bliss, and the only way to preserve this peace.",
						"japanese": "知る必要はありません。無知こそが祝福であり、この平和を守る唯一の方法です。",
						"chinese": "你无需知晓。无知即是祝福，亦是维护这份和平的唯一途径。",
						"french": "Nul besoin de savoir. L'ignorance est une bénédiction, et le seul moyen de préserver cette paix.",
						"spanish": "No necesitas saber. La ignorancia es una bendición y la única forma de preservar esta paz.",
						"vietnamese": "Không cần biết. Vô tri là một ân phước, và là cách duy nhất để giữ gìn sự bình yên này.",
						"thai": "ไม่จำเป็นต้องรู้ ความไม่รู้คือพร และเป็นหนทางเดียวที่จะรักษาสันติภาพนี้ไว้ได้",
						"hindi": "आपको जानने की आवश्यकता नहीं है। अज्ञानता ही वरदान है, और इस शांति को बनाए रखने का एकमात्र तरीका है。"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bran",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "외부의 소식은 우리에게 불필요한 혼란만 가져올 뿐입니다. 보십시오, 이 평화를.",
						"english": "News from outside only brings unnecessary chaos. Behold, this peace.",
						"japanese": "外部からの知らせは、私たちに不必要な混乱をもたらすだけです。この平和をご覧ください。",
						"chinese": "外部消息只会给我们带来不必要的混乱。看啊，这份宁静。",
						"french": "Les nouvelles de l'extérieur n'apportent que du chaos inutile. Contemplez cette paix.",
						"spanish": "Las noticias del exterior solo traen caos innecesario. Contempla esta paz.",
						"vietnamese": "Tin tức bên ngoài chỉ mang đến sự hỗn loạn không cần thiết. Hãy nhìn xem, sự bình yên này.",
						"thai": "ข่าวสารจากภายนอกนำมาซึ่งความวุ่นวายที่ไม่จำเป็นเท่านั้น จงดูสันติภาพนี้สิ",
						"hindi": "बाहर की खबरें केवल अनावश्यक अराजकता ही लाती हैं। इस शांति को देखें।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하지만… 시간이 멈춘 것 같아요. 아무것도 변하지 않아요.",
						"english": "But... it feels like time has stopped. Nothing ever changes.",
						"japanese": "ですが…時間が止まったようです。何も変わりません。",
						"chinese": "但是……时间好像停止了。什么都没有改变。",
						"french": "Mais… on dirait que le temps s'est arrêté. Rien ne change jamais.",
						"spanish": "Pero... parece que el tiempo se ha detenido. Nada cambia.",
						"vietnamese": "Nhưng… dường như thời gian đã ngừng lại. Chẳng có gì thay đổi cả.",
						"thai": "แต่...รู้สึกเหมือนเวลาหยุดนิ่ง ไม่มีอะไรเปลี่ยนแปลงเลย",
						"hindi": "लेकिन... लगता है समय रुक गया है। कुछ भी नहीं बदलता।"
					}
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그것이 완벽함의 증거입니다. 불필요한 변화는 재앙을 부르죠.",
						"english": "That is proof of perfection. Unnecessary change invites disaster.",
						"japanese": "それこそが完璧さの証です。不必要な変化は災いを招きます。",
						"chinese": "那正是完美的证明。不必要的改变只会招致灾难。",
						"french": "C'est la preuve de la perfection. Un changement inutile attire le désastre.",
						"spanish": "Esa es la prueba de la perfección. Los cambios innecesarios atraen el desastre.",
						"vietnamese": "Đó là bằng chứng của sự hoàn hảo. Thay đổi không cần thiết sẽ mang đến tai ương.",
						"thai": "นั่นคือหลักฐานของความสมบูรณ์แบบ การเปลี่ยนแปลงที่ไม่จำเป็นนำมาซึ่งหายนะ",
						"hindi": "यही पूर्णता का प्रमाण है। अनावश्यक परिवर्तन आपदा को निमंत्रण देता है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "과거의 그림자도 지워버려야 할까요? 이바르의 조각들처럼…",
						"english": "Should the shadows of the past also be erased? Like Ivar's fragments...",
						"japanese": "過去の影も消し去るべきでしょうか？イヴァールの破片のように…",
						"chinese": "过去的阴影也应该抹去吗？就像伊瓦尔的碎片一样……",
						"french": "Les ombres du passé doivent-elles aussi être effacées ? Comme les fragments d'Ivar...",
						"spanish": "¿También deberíamos borrar las sombras del pasado? Como los fragmentos de Ivar...",
						"vietnamese": "Liệu bóng tối của quá khứ cũng nên bị xóa bỏ? Giống như những mảnh vỡ của Ivar…",
						"thai": "เราควรลบเงาของอดีตออกไปด้วยไหม? เหมือนกับเศษเสี้ยวของอีวาร์...",
						"hindi": "क्या अतीत की छाया भी मिटा देनी चाहिए? इवर के टुकड़ों की तरह…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…지나간 아픔은 잊어야 합니다. 기억은 평화를 위협하니까요.",
						"english": "...Past pains must be forgotten. Memories threaten peace.",
						"japanese": "…過ぎ去った痛みは忘れるべきです。記憶は平和を脅かすからです。",
						"chinese": "……过去的痛苦必须遗忘。记忆会威胁和平。",
						"french": "...Les douleurs passées doivent être oubliées. Les souvenirs menacent la paix.",
						"spanish": "...Los dolores pasados deben ser olvidados. Los recuerdos amenazan la paz.",
						"vietnamese": "...Những nỗi đau đã qua phải được lãng quên. Ký ức đe dọa sự bình yên.",
						"thai": "...ความเจ็บปวดที่ผ่านไปแล้วต้องถูกลืม ความทรงจำคุกคามสันติภาพ",
						"hindi": "...बीते हुए दर्द को भूल जाना चाहिए। यादें शांति को खतरा पहुँचाती हैं।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무지와 외면이 어떻게 평화가 되죠? 그건 거짓된 평화잖아요!",
						"english": "How can ignorance and turning a blind eye be peace? That's a false peace!",
						"japanese": "無知と見て見ぬふりがどうして平和になるんですか？それは偽りの平和じゃないですか！",
						"chinese": "无知和漠视怎能成为和平？那不过是虚假的和平！",
						"french": "Comment l'ignorance et l'indifférence peuvent-elles être la paix ? C'est une fausse paix !",
						"spanish": "¿Cómo pueden la ignorancia y el desprecio ser paz? ¡Eso es una paz falsa!",
						"vietnamese": "Làm sao sự vô tri và ngoảnh mặt làm ngơ lại là hòa bình được? Đó là một hòa bình giả dối mà!",
						"thai": "ความไม่รู้และการละเลยจะเป็นสันติภาพได้อย่างไร? นั่นมันสันติภาพจอมปลอม!",
						"hindi": "अज्ञानता और अनदेखी शांति कैसे हो सकती है? वह तो झूठी शांति है!"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실은 때로 잔인합니다. 외면함으로써 얻는 안식이 더 값지죠.",
						"english": "The truth is sometimes cruel. The tranquility gained by looking away is more valuable.",
						"japanese": "真実とは時に残酷です。目を背けることで得られる安息の方が、より価値があります。",
						"chinese": "真相有时是残酷的。视而不见所获得的安宁更可贵。",
						"french": "La vérité est parfois cruelle. La tranquillité gagnée en détournant le regard a plus de valeur.",
						"spanish": "La verdad a veces es cruel. La tranquilidad que se obtiene al mirar a otro lado es más valiosa.",
						"vietnamese": "Sự thật đôi khi thật tàn nhẫn. Sự bình yên có được khi ngoảnh mặt làm ngơ còn đáng giá hơn.",
						"thai": "ความจริงบางครั้งก็โหดร้าย ความสงบสุขที่ได้จากการมองข้ามไปนั้นมีค่ามากกว่า",
						"hindi": "सत्य कभी-कभी क्रूर होता है। नज़रअंदाज़ करके प्राप्त होने वाली शांति अधिक मूल्यवान है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그건… 스스로를 속이는 일이에요. 우리는 계속 같은 실수를 반복하고 있어요.",
						"english": "That's... self-deception. We keep repeating the same mistakes.",
						"japanese": "それは…自分を欺く行為です。私たちは同じ過ちを繰り返しています。",
						"chinese": "那是……自欺欺人。我们一直在重复同样的错误。",
						"french": "C'est... se tromper soi-même. Nous ne cessons de répéter les mêmes erreurs.",
						"spanish": "Eso es... engañarse a uno mismo. Seguimos repitiendo los mismos errores.",
						"vietnamese": "Đó là… tự lừa dối bản thân. Chúng ta cứ lặp đi lặp lại những sai lầm cũ.",
						"thai": "นั่นมัน…การหลอกตัวเอง เรากำลังทำผิดพลาดซ้ำซาก",
						"hindi": "वह... स्वयं को धोखा देना है। हम वही गलतियाँ दोहराते रहते हैं।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "아닙니다! 이곳은 외부의 어떤 혼돈도 들어올 수 없는 완벽한 피난처입니다.",
						"english": "No! This is a perfect sanctuary where no outside chaos can enter.",
						"japanese": "違います！ここは外部のどんな混沌も入り込めない、完璧な避難所です。",
						"chinese": "不！这里是任何外部混沌都无法入侵的完美避难所。",
						"french": "Non ! C'est un sanctuaire parfait où aucun chaos extérieur ne peut entrer.",
						"spanish": "¡No! Este es un santuario perfecto donde ningún caos exterior puede entrar.",
						"vietnamese": "Không phải! Đây là một nơi trú ẩn hoàn hảo mà không một sự hỗn loạn nào từ bên ngoài có thể xâm nhập.",
						"thai": "ไม่ใช่! ที่นี่คือสถานที่หลบภัยอันสมบูรณ์แบบ ที่ความวุ่นวายจากภายนอกไม่อาจเข้ามาได้",
						"hindi": "नहीं! यह एक आदर्श अभयारण्य है जहाँ कोई बाहरी अराजकता प्रवेश नहीं कर सकती है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "단지, 당신이 그 완벽함을 이해하지 못할 뿐이죠.",
						"english": "You just don't understand its perfection.",
						"japanese": "あなたはただ、その完璧さを理解していないだけです。",
						"chinese": "你只是不理解它的完美。",
						"french": "Vous ne comprenez tout simplement pas sa perfection.",
						"spanish": "Simplemente no entiendes su perfección.",
						"vietnamese": "Bạn chỉ là không hiểu sự hoàn hảo của nó.",
						"thai": "คุณแค่ไม่เข้าใจความสมบูรณ์แบบของมัน",
						"hindi": "तुम बस उसकी पूर्णता को नहीं समझते।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "브란은 오래된 기록물을 쥐고 있었다. 손에는 불꽃이 일렁였다.",
						"english": "Bran held ancient records. Flames flickered in his hand.",
						"japanese": "ブランは古い記録を握っていた。手には炎が揺らめいていた。",
						"chinese": "布兰拿着古老的记录。火焰在他手中闪烁。",
						"french": "Bran tenait d'anciens registres. Des flammes vacillaient dans sa main.",
						"spanish": "Bran sostenía registros antiguos. Llamas parpadeaban en su mano.",
						"vietnamese": "Bran cầm những ghi chép cổ xưa. Ngọn lửa lập lòe trong tay anh.",
						"thai": "แบรนถือกำลังบันทึกโบราณ เปลวไฟกะพริบในมือของเขา",
						"hindi": "ब्रैन ने प्राचीन अभिलेख पकड़े हुए थे। उसके हाथ में लपटें झिलमिला रही थीं।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "뭘 하려는 거죠? 그 기록들은…!",
						"english": "What are you doing? Those records...!",
						"japanese": "何をするつもりだ？その記録は…！",
						"chinese": "你要做什么？那些记录……！",
						"french": "Que faites-vous ? Ces registres... !",
						"spanish": "¿Qué estás haciendo? ¡Esos registros...!",
						"vietnamese": "Anh đang làm gì vậy? Những ghi chép đó...!",
						"thai": "คุณกำลังทำอะไรอยู่? บันทึกเหล่านั้น...!",
						"hindi": "तुम क्या कर रहे हो? वो अभिलेख...!"
					}
				},
				{
					"content": {
						"korean": "불필요한 과거는 사라져야 합니다. 그래야만 에이라님의 평화가 영원할 수 있죠.",
						"english": "Unnecessary pasts must vanish. Only then can Lady Ayra's peace be eternal.",
						"japanese": "不必要な過去は消え去るべきだ。そうしてこそ、エイラ様の平和が永遠になる。",
						"chinese": "不必要的过去必须消失。只有这样，艾拉大人的和平才能永恒。",
						"french": "Les passés inutiles doivent disparaître. C'est le seul moyen pour que la paix de Dame Ayra soit éternelle.",
						"spanish": "Los pasados innecesarios deben desaparecer. Solo así la paz de Lady Ayra podrá ser eterna.",
						"vietnamese": "Những quá khứ không cần thiết phải biến mất. Chỉ khi đó, hòa bình của Nữ thần Ayra mới có thể vĩnh cửu.",
						"thai": "อดีตที่ไม่จำเป็นต้องหายไป มีเพียงวิธีเดียวเท่านั้นที่ความสงบของท่านเอร่าจะคงอยู่ตลอดไป",
						"hindi": "अनावश्यक अतीत को मिटना होगा। तभी लेडी आयरा की शांति शाश्वत हो सकती है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "기록물이 불타 사라졌다. 진실마저 얼어붙었다.",
						"english": "The records burned to ash. Even truth was frozen solid.",
						"japanese": "記録は燃え尽きた。真実までもが凍りついた。",
						"chinese": "记录化为灰烬。连真相都被冻结了。",
						"french": "Les registres sont partis en fumée. Même la vérité fut gelée.",
						"spanish": "Los registros se quemaron hasta convertirse en cenizas. Incluso la verdad se congeló.",
						"vietnamese": "Những ghi chép cháy thành tro. Ngay cả sự thật cũng đóng băng.",
						"thai": "บันทึกถูกเผาเป็นเถ้าถ่าน แม้แต่ความจริงก็แข็งตัว",
						"hindi": "अभिलेख जलकर राख हो गए। यहां तक कि सच भी जम गया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 평화가 아니야. 이건… 감금이야!",
						"english": "This isn't peace. This is... imprisonment!",
						"japanese": "これは平和じゃない。これは…監禁だ！",
						"chinese": "这不是和平。这是……囚禁！",
						"french": "Ce n'est pas la paix. C'est... l'emprisonnement !",
						"spanish": "Esto no es paz. ¡Esto es... encarcelamiento!",
						"vietnamese": "Đây không phải là hòa bình. Đây là... sự giam cầm!",
						"thai": "นี่ไม่ใช่ความสงบ นี่คือ... การคุมขัง!",
						"hindi": "यह शांति नहीं है। यह... कारावास है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						1,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 당신들은 이해하지 못하는군요. 이 균형이 얼마나 소중한지.",
						"english": "...Ultimately, you don't understand. How precious this balance is.",
						"japanese": "…結局、あなたたちは理解しないのですね。この均衡がどれほど大切か。",
						"chinese": "……最终，你们还是不明白。这个平衡有多么珍贵。",
						"french": "...En fin de compte, vous ne comprenez pas. À quel point cet équilibre est précieux.",
						"spanish": "...En última instancia, no entienden. Lo precioso que es este equilibrio.",
						"vietnamese": "...Cuối cùng, các người không hiểu. Sự cân bằng này quý giá đến mức nào.",
						"thai": "ในที่สุด คุณก็ไม่เข้าใจว่าความสมดุลนี้มีค่าเพียงใด",
						"hindi": "...अंततः, तुम नहीं समझते। यह संतुलन कितना अनमोल है।"
					},
					"speaker": "bran"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갑자기 거대한 그림자가 나타났다. 얼음의 기운이 온몸을 조여왔다.",
						"english": "Suddenly, a giant shadow appeared. The chill of ice squeezed his entire body.",
						"japanese": "突然、巨大な影が現れた。氷の冷気が全身を締め付けた。",
						"chinese": "突然，一个巨大的身影出现。冰冷的寒气紧紧地束缚着全身。",
						"french": "Soudain, une ombre gigantesque apparut. Le froid de la glace serra tout son corps.",
						"spanish": "De repente, una sombra gigante apareció. El frío del hielo apretó todo su cuerpo.",
						"vietnamese": "Đột nhiên, một cái bóng khổng lồ xuất hiện. Hơi lạnh của băng siết chặt toàn thân anh.",
						"thai": "ทันใดนั้น เงาขนาดใหญ่ก็ปรากฏขึ้น ความหนาวเย็นของน้ำแข็งบีบรัดร่างกายทั้งหมดของเขา",
						"hindi": "अचानक, एक विशाल छाया प्रकट हुई। बर्फ की ठंडक ने उसके पूरे शरीर को जकड़ लिया।"
					}
				},
				{
					"speaker": "bran",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "{random_boss}여, 이들을 막으십시오. 에이라님의 평화를 지켜야 합니다!",
						"english": "O, {random_boss}, stop them. You must protect Lady Ayra's peace!",
						"japanese": "{random_boss}よ、彼らを止めなさい。エイラ様の平和を守らねば！",
						"chinese": "{random_boss}啊，阻止他们。必须守护艾拉大人的和平！",
						"french": "Ô, {random_boss}, arrêtez-les. Vous devez protéger la paix de Dame Ayra !",
						"spanish": "¡Oh, {random_boss}, deténganlos. Debes proteger la paz de Lady Ayra!",
						"vietnamese": "Hỡi {random_boss}, hãy ngăn chặn họ. Ngươi phải bảo vệ hòa bình của Nữ thần Ayra!",
						"thai": "โอ้ {random_boss} หยุดพวกเขาเดี๋ยวนี้! เจ้าต้องปกป้องความสงบของท่านเอร่า!",
						"hindi": "हे, {random_boss}, उन्हें रोको। तुम्हें लेडी आयरा की शांति की रक्षा करनी चाहिए!"
					}
				},
				{
					"content": {
						"korean": "…침입자… 균형을 깨뜨리는 자… 소멸…",
						"english": "...Intruder... One who breaks the balance... Annihilate...",
						"japanese": "…侵入者…均衡を破る者…消滅…",
						"chinese": "……入侵者……打破平衡者……毁灭……",
						"french": "...Intrus... Celui qui rompt l'équilibre... Anéantir...",
						"spanish": "...Intruso... El que rompe el equilibrio... Aniquilar...",
						"vietnamese": "...Kẻ xâm nhập... Kẻ phá vỡ sự cân bằng... Tiêu diệt...",
						"thai": "ผู้บุกรุก... ผู้ที่ทำลายสมดุล... ทำลาย...",
						"hindi": "...घुसपैठिया... संतुलन तोड़ने वाला... विनाश..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 감금된 평화를 부수고, 진짜 자유를 찾겠어!",
						"english": "I'll shatter this imprisoned peace and find true freedom!",
						"japanese": "この監禁された平和を打ち破り、真の自由を見つけ出す！",
						"chinese": "我要打破这被囚禁的和平，寻找真正的自由！",
						"french": "Je briserai cette paix emprisonnée et trouverai la vraie liberté !",
						"spanish": "¡Romperé esta paz encarcelada y encontraré la verdadera libertad!",
						"vietnamese": "Ta sẽ phá tan sự bình yên bị giam cầm này, và tìm kiếm tự do thật sự!",
						"thai": "ข้าจะทำลายความสงบที่ถูกกักขังนี้ และแสวงหาอิสรภาพที่แท้จริง!",
						"hindi": "मैं इस बंदी शांति को तोड़कर सच्ची आज़ादी पाऊँगा!"
					}
				},
				{
					"action": "exit",
					"speaker": "bran",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…무지 속에서… 영원한 평화를…",
						"english": "...In ignorance... eternal peace...",
						"japanese": "…無知の中で…永遠の平和を…",
						"chinese": "……在无知中……永恒的和平……",
						"french": "...Dans l'ignorance... la paix éternelle...",
						"spanish": "...En la ignorancia... paz eterna...",
						"vietnamese": "...Trong sự vô tri... bình yên vĩnh cửu...",
						"thai": "...ในความไม่รู้...สันติสุขนิรันดร์...",
						"hindi": "…अज्ञानता में… अनंत शांति…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 포기할 수 없어. 이 평화가 거짓이라면, 내가 깨부술 거야!",
						"english": "I can't give up yet. If this peace is a lie, I'll shatter it!",
						"japanese": "まだ諦められない。この平和が偽りなら、私が打ち砕いてやる！",
						"chinese": "我还不能放弃。如果这份和平是谎言，我就会将其打破！",
						"french": "Je ne peux pas encore abandonner. Si cette paix est un mensonge, je la briserai !",
						"spanish": "Aún no puedo rendirme. ¡Si esta paz es una mentira, la haré pedazos!",
						"vietnamese": "Ta vẫn chưa thể từ bỏ. Nếu sự bình yên này là giả dối, ta sẽ phá tan nó!",
						"thai": "ข้ายังยอมแพ้ไม่ได้ หากความสงบสุขนี้เป็นเรื่องโกหก ข้าจะทำลายมันเอง!",
						"hindi": "मैं अभी हार नहीं मान सकता। अगर यह शांति झूठ है, तो मैं इसे तोड़ दूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…균형은… 깨어지지 않아… 에이라님은… 영원히…",
						"english": "...The balance... will not break... Lady Aira... forever...",
						"japanese": "…均衡は…崩れない…エイラ様は…永遠に…",
						"chinese": "……平衡……不会被打破……艾拉大人……永恒……",
						"french": "...L'équilibre... ne sera pas brisé... Dame Aira... pour toujours...",
						"spanish": "...El equilibrio... no se romperá... Lady Aira... por siempre...",
						"vietnamese": "...Sự cân bằng... sẽ không bị phá vỡ... Tiểu thư Aira... vĩnh cửu...",
						"thai": "...สมดุล...ไม่แตกสลาย...ท่านเอร่า...นิรันดร์...",
						"hindi": "…संतुलन… नहीं टूटेगा… देवी ऐरा… हमेशा के लिए…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이곳의 평화는, 누군가의 희생 위에 세워진 감옥이었어.",
						"english": "The peace here was a prison built upon someone's sacrifice.",
						"japanese": "ここの平和は、誰かの犠牲の上に築かれた牢獄だった。",
						"chinese": "这里的和平，是建立在某人牺牲之上的牢狱。",
						"french": "La paix ici était une prison bâtie sur le sacrifice de quelqu'un.",
						"spanish": "La paz aquí era una prisión construida sobre el sacrificio de alguien.",
						"vietnamese": "Bình yên nơi đây, là một nhà tù được xây dựng trên sự hy sinh của ai đó.",
						"thai": "สันติสุขที่นี่ คือคุกที่สร้างขึ้นบนการเสียสละของใครบางคน",
						"hindi": "यहाँ की शांति, किसी के बलिदान पर बनी एक जेल थी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음 조각 사이로 미세한 균열이 보였다. 진실이 서서히 드러나고 있었다.",
						"english": "A faint crack appeared between the ice shards. The truth was slowly revealing itself.",
						"japanese": "氷の破片の間に微細な亀裂が見えた。真実が徐々に明らかになりつつあった。",
						"chinese": "冰块之间出现了细微的裂缝。真相正在慢慢浮现。",
						"french": "Une fine fissure apparut entre les éclats de glace. La vérité se révélait lentement.",
						"spanish": "Una tenue grieta apareció entre los fragmentos de hielo. La verdad se estaba revelando lentamente.",
						"vietnamese": "Một vết nứt nhỏ hiện ra giữa những mảnh băng. Sự thật dần dần hé lộ.",
						"thai": "รอยร้าวเล็กๆ ปรากฏขึ้นระหว่างเกล็ดน้ำแข็ง ความจริงกำลังเผยออกมาอย่างช้าๆ",
						"hindi": "बर्फ के टुकड़ों के बीच एक बारीक दरार दिखाई दी। सच धीरे-धीरे सामने आ रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 얼어붙었고, 시간마저 멈춘 듯했다.",
			"이곳은 완벽한 균형, 영원한 평화를 약속하는 피난처.",
			"그러나 무지라는 이름의 덫이, 가장 치명적인 감옥이 될 줄 누가 알았을까.",
			"그들은 균형을 지키기 위해, 모든 것을 외면했다.",
			"그리고 침묵은, 가장 큰 죄가 되었다."
		],
		"english": [
			"The forest was frozen, and time itself seemed to stand still.",
			"This was a sanctuary promising perfect balance, eternal peace.",
			"But who knew the trap called ignorance would become the deadliest prison?",
			"To maintain balance, they turned a blind eye to everything.",
			"And silence became the greatest sin."
		],
		"japanese": [
			"森は凍りつき、時間さえ止まったかのようだった。",
			"ここは完璧な均衡と永遠の平和を約束する聖域。",
			"しかし、無知という名の罠が、最も致命的な牢獄となることを誰が知っていたか。",
			"彼らは均衡を守るため、すべてを無視した。",
			"そして沈黙は、最大の罪となった。"
		],
		"chinese": [
			"森林冻结，时间仿佛也停滞了。",
			"这里是应许完美平衡、永恒和平的避难所。",
			"但谁曾料到，名为无知的陷阱，竟会成为最致命的监狱。",
			"为了维持平衡，他们对一切视而不见。",
			"而沉默，成了最大的罪恶。"
		],
		"french": [
			"La forêt était gelée, et le temps semblait s'être arrêté.",
			"C'était un sanctuaire promettant un équilibre parfait, une paix éternelle.",
			"Mais qui aurait su que le piège nommé ignorance deviendrait la prison la plus mortelle ?",
			"Pour maintenir l'équilibre, ils ont ignoré tout le reste.",
			"Et le silence devint le plus grand des péchés."
		],
		"spanish": [
			"El bosque estaba congelado, y el tiempo mismo parecía haberse detenido.",
			"Este era un santuario que prometía un equilibrio perfecto, paz eterna.",
			"¿Pero quién iba a saber que la trampa llamada ignorancia se convertiría en la prisión más mortífera?",
			"Para mantener el equilibrio, hicieron la vista gorda a todo.",
			"Y el silencio se convirtió en el mayor pecado."
		],
		"vietnamese": [
			"Rừng cây đóng băng, thời gian dường như cũng ngừng lại.",
			"Đây là một nơi trú ẩn hứa hẹn sự cân bằng hoàn hảo, hòa bình vĩnh cửu.",
			"Nhưng ai biết rằng cái bẫy mang tên sự thiếu hiểu biết sẽ trở thành nhà tù chết chóc nhất?",
			"Để duy trì sự cân bằng, họ đã phớt lờ mọi thứ.",
			"Và sự im lặng đã trở thành tội lỗi lớn nhất."
		],
		"thai": [
			"ป่าถูกแช่แข็ง และเวลาดูเหมือนจะหยุดนิ่ง",
			"ที่นี่คือที่หลบภัยที่ให้คำมั่นถึงความสมดุลที่สมบูรณ์แบบ สันติภาพชั่วนิรันดร์",
			"แต่ใครจะรู้ว่ากับดักที่เรียกว่าความไม่รู้จะกลายเป็นคุกที่อันตรายที่สุด?",
			"เพื่อรักษาสมดุล พวกเขาเมินเฉยต่อทุกสิ่ง",
			"และความเงียบก็กลายเป็นบาปที่ใหญ่ที่สุด"
		],
		"hindi": [
			"जंगल जम गया था, और समय भी थम-सा गया था।",
			"यह एक ऐसी शरणस्थली थी जो पूर्ण संतुलन, शाश्वत शांति का वादा करती थी।",
			"लेकिन कौन जानता था कि अज्ञानता नामक जाल सबसे घातक जेल बन जाएगा?",
			"संतुलन बनाए रखने के लिए, उन्होंने सब कुछ नज़रअंदाज़ कर दिया।",
			"और चुप्पी सबसे बड़ा पाप बन गई।"
		]
	}
} as const;
