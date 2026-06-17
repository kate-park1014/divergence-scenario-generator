export const scenario_snowy_astrielle_8_03 = {
	"scenario_id": "snowy_astrielle_8_03",
	"order": 3,
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
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "왕국은 더욱 깊은 얼음 속으로 가라앉았다. 발걸음마다 서리가 부서졌다.",
						"english": "The kingdom sank deeper into ice. Frost shattered with every step.",
						"japanese": "王国はさらに深い氷の中へと沈んでいった。一歩ごとに霜が砕けた。",
						"chinese": "王国沉入更深的冰层。每一步都踩碎了寒霜。",
						"french": "Le royaume s'enfonçait plus profondément dans la glace. Le givre se brisait à chaque pas.",
						"spanish": "El reino se hundió más profundamente en el hielo. La escarcha se rompía con cada paso.",
						"vietnamese": "Vương quốc chìm sâu hơn vào băng giá. Sương giá vỡ tan dưới mỗi bước chân.",
						"thai": "อาณาจักรจมดิ่งลึกลงไปในน้ำแข็ง น้ำค้างแข็งแตกสลายทุกย่างก้าว",
						"hindi": "राज्य और गहरे बर्फ में डूब गया। हर कदम पर पाला टूटता गया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 추워지는 것 같아.",
						"english": "It feels like it's getting colder and colder.",
						"japanese": "どんどん寒くなっているようだ。",
						"chinese": "感觉越来越冷了。",
						"french": "On dirait qu'il fait de plus en plus froid.",
						"spanish": "Parece que hace cada vez más frío.",
						"vietnamese": "Càng lúc càng lạnh hơn.",
						"thai": "รู้สึกเหมือนยิ่งหนาวขึ้นเรื่อยๆ",
						"hindi": "लगता है ठंड और बढ़ती जा रही है。"
					}
				},
				{
					"speaker": "bran",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "방심하지 마라. 이제부터 진짜 싸움이다.",
						"english": "Don't let your guard down. The real fight begins now.",
						"japanese": "油断するな。ここからが本当の戦いだ。",
						"chinese": "别放松警惕。真正的战斗现在才开始。",
						"french": "Ne baisse pas ta garde. Le vrai combat commence maintenant.",
						"spanish": "No bajes la guardia. La verdadera lucha comienza ahora.",
						"vietnamese": "Đừng lơ là. Cuộc chiến thực sự bắt đầu từ bây giờ.",
						"thai": "อย่าประมาท นี่คือการต่อสู้ที่แท้จริง",
						"hindi": "लापरवाह मत हो। अब असली लड़ाई शुरू होगी。"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "브란…!",
						"english": "Bran...!",
						"japanese": "ブラン…！",
						"chinese": "布兰……！",
						"french": "Bran… !",
						"spanish": "¡Bran...!",
						"vietnamese": "Bran…!",
						"thai": "บราน…!",
						"hindi": "ब्रान…!"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "저것들이 얼음 병사다. 내 뒤에 있어라!",
						"english": "Those are ice soldiers. Stay behind me!",
						"japanese": "あれが氷の兵士だ。私の後ろにいろ！",
						"chinese": "那些是冰霜士兵。待在我身后！",
						"french": "Ce sont des soldats de glace. Reste derrière moi !",
						"spanish": "Esos son soldados de hielo. ¡Quédate detrás de mí!",
						"vietnamese": "Đó là binh lính băng. Hãy ở phía sau ta!",
						"thai": "พวกนั้นคือนักรบน้ำแข็ง อยู่ข้างหลังข้า!",
						"hindi": "वे बर्फ के सैनिक हैं। मेरे पीछे रहो!"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "침입자… 모두 얼려버려라!",
						"english": "Intruders... Freeze them all!",
						"japanese": "侵入者… 全て凍らせろ！",
						"chinese": "入侵者…… 把他们都冻结！",
						"french": "Intruses... Gèle-les tous !",
						"spanish": "¡Intrusos... Congeladlos a todos!",
						"vietnamese": "Kẻ xâm nhập… Đóng băng tất cả!",
						"thai": "ผู้บุกรุก… แช่แข็งพวกมันทั้งหมด!",
						"hindi": "घुसपैठिए… उन सबको जमा दो!"
					}
				},
				{
					"content": {
						"korean": "대장, 적들이 너무 많아요!",
						"english": "Captain, there are too many enemies!",
						"japanese": "「隊長、敵が多すぎます！」",
						"chinese": "队长，敌人太多了！",
						"french": "Capitaine, il y a trop d'ennemis !",
						"spanish": "¡Capitán, hay demasiados enemigos!",
						"vietnamese": "Đội trưởng, kẻ địch đông quá!",
						"thai": "ผู้กอง ศัตรูเยอะเกินไป!",
						"hindi": "कप्तान, बहुत सारे दुश्मन हैं!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "전투가 격렬해질수록 주변의 공기가 급격히 차가워졌다. 얼음 칼날이 더욱 날카로워졌다.",
						"english": "As the battle intensified, the air grew rapidly colder. The ice blades sharpened further.",
						"japanese": "「戦闘が激化するにつれて、周囲の空気が急速に冷たくなった。氷の刃はさらに鋭さを増した。」",
						"chinese": "随着战斗的白热化，周围的空气骤然变冷。冰刃变得更加锋利。",
						"french": "Alors que la bataille s'intensifiait, l'air devint rapidement plus froid. Les lames de glace s'aiguisèrent davantage.",
						"spanish": "A medida que la batalla se intensificaba, el aire se volvía rápidamente más frío. Las hojas de hielo se afilaron aún más.",
						"vietnamese": "Khi trận chiến càng dữ dội, không khí xung quanh càng lạnh đi nhanh chóng. Lưỡi kiếm băng càng thêm sắc bén.",
						"thai": "ยิ่งการต่อสู้ดุเดือดขึ้นเท่าไร อากาศรอบตัวก็ยิ่งเย็นลงอย่างรวดเร็ว คมดาบน้ำแข็งก็ยิ่งแหลมคมขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे लड़ाई तेज़ होती गई, आसपास की हवा तेज़ी से ठंडी होती गई। बर्फ़ की तलवारें और भी तेज़ हो गईं।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "이건… 여왕의 힘인가.",
						"english": "This... is the Queen's power.",
						"japanese": "「これは… 女王の力か。」",
						"chinese": "这是……女王的力量吗？",
						"french": "C'est... le pouvoir de la Reine.",
						"spanish": "Esto... es el poder de la Reina.",
						"vietnamese": "Đây là... sức mạnh của Nữ hoàng ư.",
						"thai": "นี่มัน... พลังของราชินีหรือเปล่า",
						"hindi": "यह... क्या यह रानी की शक्ति है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "생각보다 강해. 여왕의 힘이 점점 더 강해지고 있어.",
						"english": "Stronger than expected. The Queen's power is growing stronger and stronger.",
						"japanese": "「思ったより強い。女王の力がどんどん強くなっている。」",
						"chinese": "比想象中强大。女王的力量正在变得越来越强。",
						"french": "Plus forte que prévu. Le pouvoir de la Reine devient de plus en plus puissant.",
						"spanish": "Más fuerte de lo esperado. El poder de la Reina se está volviendo cada vez más fuerte.",
						"vietnamese": "Mạnh hơn tôi nghĩ. Sức mạnh của Nữ hoàng đang ngày càng mạnh lên.",
						"thai": "แข็งแกร่งกว่าที่คิด พลังของราชินีกำลังแข็งแกร่งขึ้นเรื่อยๆ",
						"hindi": "जितना सोचा था उससे ज़्यादा ताक़तवर है। रानी की शक्ति और भी मज़बूत होती जा रही है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "대체 어디까지 가는 거예요?",
						"english": "Just how far are we going?",
						"japanese": "「一体どこまで行くんですか？」",
						"chinese": "到底要去哪里？",
						"french": "Jusqu'où allons-nous ?",
						"spanish": "¿Hasta dónde vamos a llegar?",
						"vietnamese": "Rốt cuộc là sẽ đi đến đâu?",
						"thai": "เราจะไปถึงไหนกันแน่?",
						"hindi": "आखिर कहाँ तक जा रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼음 성까지. 하지만… 이 추위는 단순한 마법이 아닐지도 몰라.",
						"english": "To the Ice Castle. But... this cold might not be simple magic.",
						"japanese": "「氷の城まで。しかし… この寒さはただの魔法ではないのかもしれない。」",
						"chinese": "到冰之城堡。但是……这种寒冷可能不仅仅是魔法。",
						"french": "Jusqu'au Château de Glace. Mais... ce froid n'est peut-être pas une simple magie.",
						"spanish": "Hasta el Castillo de Hielo. Pero... este frío podría no ser simple magia.",
						"vietnamese": "Đến Lâu đài Băng. Nhưng... cái lạnh này có lẽ không chỉ là ma thuật đơn thuần.",
						"thai": "จนถึงปราสาทน้ำแข็ง แต่... ความหนาวเย็นนี้อาจไม่ใช่แค่เวทมนตร์ธรรมดา",
						"hindi": "बर्फ़ के महल तक। लेकिन... यह ठंड सिर्फ़ जादू नहीं हो सकती।"
					},
					"type": "speech",
					"speaker": "bran"
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
						"korean": "길은 점점 더 좁아지고, 뒤돌아볼 여유조차 사라졌다. 얼음 장벽이 길을 막았다.",
						"english": "The path grew narrower, leaving no room to look back. An ice barrier blocked the way.",
						"japanese": "「道はますます狭くなり、振り返る余裕さえなくなった。氷の障壁が道を塞いだ。」",
						"chinese": "道路越来越窄，甚至没有回头的时间。冰墙挡住了去路。",
						"french": "Le chemin devenait de plus en plus étroit, ne laissant aucune place pour regarder en arrière. Une barrière de glace bloquait le passage.",
						"spanish": "El camino se estrechaba cada vez más, sin dejar espacio para mirar atrás. Una barrera de hielo bloqueaba el paso.",
						"vietnamese": "Con đường ngày càng hẹp, không còn chỗ để nhìn lại. Một bức tường băng đã chặn lối đi.",
						"thai": "เส้นทางแคบลงเรื่อยๆ ไม่มีแม้แต่เวลาให้หันหลังกลับ กำแพงน้ำแข็งขวางทางไว้",
						"hindi": "रास्ता और संकरा होता गया, पीछे मुड़कर देखने की भी गुंजाइश नहीं रही। बर्फ़ की दीवार ने रास्ता रोक दिया।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "돌아갈 수 없을 것 같아요…",
						"english": "I don't think we can go back...",
						"japanese": "「もう引き返せないみたいです…」",
						"chinese": "我们好像回不去了……",
						"french": "Je ne pense pas que nous puissions revenir en arrière...",
						"spanish": "No creo que podamos volver...",
						"vietnamese": "Tôi e là chúng ta không thể quay lại được nữa...",
						"thai": "ฉันคิดว่าเรากลับไปไม่ได้แล้ว...",
						"hindi": "मुझे नहीं लगता कि हम वापस जा सकते हैं..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "후회할 거면 여기까지 오지도 않았다. 우린 멈추지 않아.",
						"english": "If I were going to regret it, I wouldn't have come this far. We won't stop.",
						"japanese": "「後悔するくらいなら、ここまで来なかった。私たちは止まらない。」",
						"chinese": "如果会后悔，就不会走到这里。我们不会停下。",
						"french": "Si je devais regretter, je ne serais pas venu si loin. Nous ne nous arrêterons pas.",
						"spanish": "Si fuera a arrepentirme, no habría llegado tan lejos. No nos detendremos.",
						"vietnamese": "Nếu định hối hận thì tôi đã không đến tận đây. Chúng ta sẽ không dừng lại.",
						"thai": "ถ้าจะเสียใจ ก็คงไม่มาถึงตรงนี้หรอก เราจะไม่หยุด",
						"hindi": "अगर पछताना होता, तो मैं इतनी दूर आता ही नहीं। हम रुकेंगे नहीं।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "겨우 이 정도인가… 여왕의 분노를 감당할 수 없을 것이다.",
						"english": "Is this all you've got? You cannot withstand the Queen's wrath.",
						"japanese": "たかがこれしきか… 女王の怒りには耐えられまい。",
						"chinese": "就这点本事吗… 你们承受不住女王的愤怒。",
						"french": "C'est tout ce que vous avez ? Vous ne supporterez pas la colère de la Reine.",
						"spanish": "¿Eso es todo? No podréis soportar la ira de la Reina.",
						"vietnamese": "Chỉ đến thế này thôi sao... Ngươi sẽ không thể chịu đựng được cơn thịnh nộ của Nữ hoàng đâu.",
						"thai": "แค่นี้เองหรือ... เจ้าจะทานทนโทสะของราชินีไม่ได้หรอก",
						"hindi": "बस इतना ही...? तुम रानी के क्रोध का सामना नहीं कर पाओगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "쓰러뜨렸다!",
						"english": "Defeated!",
						"japanese": "倒したぞ！",
						"chinese": "击败了！",
						"french": "Vaincu !",
						"spanish": "¡Derrotado!",
						"vietnamese": "Đã đánh bại!",
						"thai": "โค่นลงแล้ว!",
						"hindi": "हरा दिया!"
					},
					"emotion": "happy"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "아직 멀었어. 이건 시작에 불과하다.",
						"english": "Not yet. This is just the beginning.",
						"japanese": "まだまだだ。これは序章に過ぎない。",
						"chinese": "还早呢。这只是个开始。",
						"french": "Pas encore. Ce n'est que le début.",
						"spanish": "Aún no. Esto es solo el principio.",
						"vietnamese": "Chưa đâu. Đây chỉ là khởi đầu thôi.",
						"thai": "ยังไม่หมดแค่นี้ นี่เป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "अभी बहुत दूर है। यह तो बस शुरुआत है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 병사들이 사라진 자리, 왕국은 더욱 깊은 슬픔을 드러내기 시작했다.",
						"english": "As the ice soldiers vanished, the kingdom began to sink into deeper sorrow.",
						"japanese": "氷の兵士たちが消え去った場所には、王国がさらに深い悲しみを露わにし始めた。",
						"chinese": "冰霜士兵消失之处，王国开始显露出更深的悲伤。",
						"french": "Là où les soldats de glace disparurent, le royaume commença à révéler une tristesse plus profonde.",
						"spanish": "Donde los soldados de hielo desaparecieron, el reino comenzó a revelar una tristeza aún más profunda.",
						"vietnamese": "Nơi những binh sĩ băng giá biến mất, vương quốc bắt đầu chìm trong nỗi buồn sâu sắc hơn.",
						"thai": "เมื่อทหารน้ำแข็งหายไป อาณาจักรก็เริ่มเผยความโศกเศร้าที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "जहां बर्फीले सैनिक गायब हुए, वहां राज्य ने और भी गहरा दुख प्रकट करना शुरू कर दिया।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들… 감히 여왕의 병사에게 대적하다니.",
						"english": "Insignificant wretches... How dare you challenge the Queen's soldiers.",
						"japanese": "取るに足らぬ者どもめ… よくも女王の兵士に歯向かったな。",
						"chinese": "卑微的家伙们… 竟敢对抗女王的士兵。",
						"french": "Créatures insignifiantes… Comment osez-vous défier les soldats de la Reine.",
						"spanish": "Criaturas insignificantes... ¿Cómo osas desafiar a los soldados de la Reina?",
						"vietnamese": "Những kẻ hèn mọn... Dám đối đầu với binh sĩ của Nữ hoàng sao.",
						"thai": "พวกไร้ค่า... บังอาจมาต่อกรกับทหารของราชินีหรือ",
						"hindi": "तुच्छ प्राणी... रानी के सैनिकों को चुनौती देने की हिम्मत की।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직 끝이 아니야!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ… まだ終わりじゃない！",
						"chinese": "该死… 还没结束！",
						"french": "Maudit… Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea! ¡Aún no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้หรอก!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "포기하지 마라. 다시 일어설 수 있다.",
						"english": "Don't give up. You can rise again.",
						"japanese": "諦めるな。再び立ち上がれる。",
						"chinese": "别放弃。你能再次站起来。",
						"french": "N'abandonne pas. Tu peux te relever.",
						"spanish": "No te rindas. Puedes levantarte de nuevo.",
						"vietnamese": "Đừng bỏ cuộc. Ngươi có thể đứng dậy lần nữa.",
						"thai": "อย่าเพิ่งยอมแพ้ เจ้าลุกขึ้นสู้ได้อีกครั้ง",
						"hindi": "हार मत मानो। तुम फिर से उठ सकते हो।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "왕국 심장부. 거대한 얼음 결정들이 솟아오른 곳에서 낯선 존재가 나타났다.",
						"english": "Heart of the kingdom. A strange presence appeared where colossal ice crystals rose.",
						"japanese": "「王国の中枢。巨大な氷の結晶がそびえ立つ場所から、見慣れない存在が現れた。」",
						"chinese": "王国心脏。在巨大的冰晶升起的地方，一个陌生的存在出现了。",
						"french": "Cœur du royaume. Une présence étrange apparut là où de gigantesques cristaux de glace s'élevaient.",
						"spanish": "Corazón del reino. Una extraña presencia apareció donde se alzaban colosales cristales de hielo.",
						"vietnamese": "Trung tâm vương quốc. Một sự hiện diện xa lạ xuất hiện tại nơi những tinh thể băng khổng lồ trỗi dậy.",
						"thai": "ใจกลางอาณาจักร สิ่งมีชีวิตแปลกหน้าปรากฏตัวขึ้น ณ ที่ซึ่งผลึกน้ำแข็งมหึมาก่อตัวขึ้น",
						"hindi": "राज्य का हृदय। विशाल बर्फ़ के क्रिस्टल जहाँ से उठ रहे थे, वहाँ एक अजीब उपस्थिति दिखाई दी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히 여기까지 오다니… 건방진 것들.",
						"english": "How dare you come this far... insolent fools.",
						"japanese": "よくもここまで… 不遜な奴らめ。",
						"chinese": "竟敢来到这里… 无礼之徒。",
						"french": "Comment osez-vous venir si loin… Insolents.",
						"spanish": "Cómo osas llegar hasta aquí... ¡Insolentes!",
						"vietnamese": "Dám đến tận đây... lũ ngạo mạn.",
						"thai": "บังอาจมาถึงที่นี่... พวกบังอาจ",
						"hindi": "यहां तक आने की हिम्मत की... धृष्ट!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 자가 보스인가요?",
						"english": "Is this the boss?",
						"japanese": "こいつがボスですか？",
						"chinese": "这是首领吗？",
						"french": "C'est le boss ?",
						"spanish": "¿Es este el jefe?",
						"vietnamese": "Đây là trùm sao?",
						"thai": "นี่คือบอสหรือเปล่า?",
						"hindi": "क्या यह बॉस है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "방심하지 마라. 여왕의 그림자다.",
						"english": "Don't drop your guard. It's the Queen's shadow.",
						"japanese": "油断するな。女王の影だ。",
						"chinese": "别大意。这是女王的影。",
						"french": "Ne baissez pas votre garde. C'est l'ombre de la Reine.",
						"spanish": "No te confíes. Es la sombra de la Reina.",
						"vietnamese": "Đừng mất cảnh giác. Đó là cái bóng của Nữ hoàng.",
						"thai": "อย่าประมาท นี่คือเงาของราชินี",
						"hindi": "सावधान रहो। यह रानी की परछाई है।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"왕국 깊은 곳으로, 탐험대는 나아갔다.",
			"하지만 숲은 더 이상 침묵하지 않았다.",
			"날카로운 얼음과 함께, 새로운 위협이 깨어났다.",
			"겨울의 여왕은, 자신의 영역을 침범한 자들을 용서하지 않았다."
		],
		"english": [
			"Deeper into the kingdom, the expedition advanced.",
			"But the forest was no longer silent.",
			"With sharp ice, a new threat awakened.",
			"The Queen of Winter showed no mercy to those who trespassed her domain."
		],
		"japanese": [
			"王国の奥深くへ、探検隊は進んだ。",
			"しかし、森はもはや沈黙していなかった。",
			"鋭い氷とともに、新たな脅威が目覚めた。",
			"冬の女王は、自らの領域を侵した者たちを許さなかった。"
		],
		"chinese": [
			"探险队深入王国腹地。",
			"但森林不再沉默。",
			"伴随着锋利的冰，新的威胁苏醒了。",
			"冬日女王不会饶恕那些侵犯她领地的人。"
		],
		"french": [
			"L'expédition s'enfonçait dans les profondeurs du royaume.",
			"Mais la forêt ne se taisait plus.",
			"Avec la glace tranchante, une nouvelle menace s'éveilla.",
			"La Reine de l'Hiver n'accordait aucune pitié à ceux qui envahissaient son domaine."
		],
		"spanish": [
			"La expedición avanzó hacia las profundidades del reino.",
			"Pero el bosque ya no guardaba silencio.",
			"Con el hielo afilado, una nueva amenaza despertó.",
			"La Reina del Invierno no perdonó a quienes invadieron su dominio."
		],
		"vietnamese": [
			"Đoàn thám hiểm tiến sâu vào vương quốc.",
			"Nhưng khu rừng không còn im lặng nữa.",
			"Cùng với băng sắc nhọn, một mối đe dọa mới đã thức tỉnh.",
			"Nữ hoàng Mùa đông không tha thứ cho những kẻ xâm phạm lãnh địa của mình."
		],
		"thai": [
			"คณะสำรวจมุ่งหน้าลึกเข้าไปในอาณาจักร",
			"แต่ป่าไม่ได้เงียบงันอีกต่อไป",
			"พร้อมกับน้ำแข็งอันแหลมคม ภัยคุกคามใหม่ได้ตื่นขึ้น",
			"ราชินีแห่งเหมันต์ไม่ให้อภัยผู้ที่บุกรุกอาณาเขตของพระองค์"
		],
		"hindi": [
			"राज्य के गहरे अंदर, अभियान दल आगे बढ़ा।",
			"लेकिन जंगल अब शांत नहीं था。",
			"तीखी बर्फ के साथ, एक नया खतरा जाग उठा।",
			"शीतकाल की रानी ने अपने क्षेत्र में घुसपैठ करने वालों को क्षमा नहीं किया।"
		]
	}
} as const;
