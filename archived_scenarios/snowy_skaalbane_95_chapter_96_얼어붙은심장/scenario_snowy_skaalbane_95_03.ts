export const scenario_snowy_skaalbane_95_03 = {
	"scenario_id": "snowy_skaalbane_95_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "극한의 추위가 모든 것을 얼렸다. 고요한 침묵이 영혼을 갉아먹는 듯했다.",
						"english": "Extreme cold froze everything. The quiet silence seemed to gnaw at the soul.",
						"japanese": "極寒が全てを凍らせた。静寂が魂を蝕むようだった。",
						"chinese": "极寒冻结了一切。寂静似乎在啃噬灵魂。",
						"french": "Le froid extrême a tout gelé. Le silence pesant semblait ronger l'âme.",
						"spanish": "El frío extremo congeló todo. El silencio inquietante parecía corroer el alma.",
						"vietnamese": "Cực lạnh đã đóng băng mọi thứ. Sự im lặng tĩnh mịch như đang gặm nhấm linh hồn.",
						"thai": "ความหนาวเย็นสุดขีดทำให้ทุกสิ่งแข็งตัว ความเงียบงันเหมือนกัดกินจิตวิญญาณ.",
						"hindi": "अत्यधिक ठंड ने सब कुछ जमा दिया। शांत खामोशी आत्मा को खाए जा रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 추워지는 것 같아. …몸이 얼어붙는 느낌이야.",
						"english": "It seems to be getting colder and colder. ...My body feels like it's freezing.",
						"japanese": "どんどん寒くなっているようだ。…体が凍りつく感じだ。",
						"chinese": "好像越来越冷了。……身体都要冻僵了。",
						"french": "Il semble faire de plus en plus froid. ...J'ai l'impression que mon corps gèle.",
						"spanish": "Parece que hace cada vez más frío. ...Siento que mi cuerpo se congela.",
						"vietnamese": "Hình như càng ngày càng lạnh. ...Cảm giác như cơ thể mình đang đóng băng.",
						"thai": "รู้สึกเหมือนยิ่งหนาวขึ้นเรื่อยๆ ...เหมือนร่างกายจะแข็งตัว.",
						"hindi": "मुझे लगता है कि यह और ठंडा होता जा रहा है। ...मेरा शरीर जम रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "…무언가 스쳐 지나간 것 같은데. 착각인가?",
						"english": "...Something seemed to brush past. Was it my imagination?",
						"japanese": "…何かが通り過ぎたような。錯覚か？",
						"chinese": "……好像有什么东西擦肩而过。是错觉吗？",
						"french": "...Quelque chose a semblé passer. Une illusion ?",
						"spanish": "...Algo pareció pasar. ¿Fue mi imaginación?",
						"vietnamese": "...Hình như có gì đó lướt qua. Là ảo giác sao?",
						"thai": "...เหมือนมีอะไรบางอย่างผ่านไป. คิดไปเองรึเปล่า?",
						"hindi": "...कुछ गुज़र गया लगता है। क्या यह मेरा भ्रम था?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼음 미궁 속으로, 한 발짝 더.",
						"english": "Into the ice labyrinth, one step further.",
						"japanese": "氷の迷宮へ、もう一歩。",
						"chinese": "深入冰之迷宫，再进一步。",
						"french": "Dans le labyrinthe de glace, un pas de plus.",
						"spanish": "Dentro del laberinto de hielo, un paso más.",
						"vietnamese": "Vào mê cung băng, một bước nữa.",
						"thai": "ก้าวเข้าไปในเขาวงกตน้ำแข็งอีกก้าวหนึ่ง.",
						"hindi": "बर्फ़ीले भूलभुलैया में, एक कदम और।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 저 그림자…! 내 뒤에 죽은 바이킹들이…!",
						"english": "No, that shadow...! Dead Vikings behind me...!",
						"japanese": "いや、あの影…！私の後ろに死んだヴァイキングたちが…！",
						"chinese": "不，那个影子……！我身后有死去的维京人……！",
						"french": "Non, cette ombre…! Des Vikings morts derrière moi…!",
						"spanish": "¡No, esa sombra...! ¡Vikingos muertos detrás de mí...!",
						"vietnamese": "Không, cái bóng đó...! Những chiến binh Viking đã chết phía sau tôi...!",
						"thai": "ไม่สิ, เงาพวกนั้น...! ไวกิ้งที่ตายแล้วอยู่ข้างหลังฉัน...!",
						"hindi": "नहीं, वह परछाई...! मेरे पीछे मृत वाइकिंग्स...!"
					},
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이바르, 무슨 소리야? 아무도 없어.",
						"english": "Ivar, what are you talking about? There's no one there.",
						"japanese": "イーヴァル、何を言っているんだ？誰もいないぞ。",
						"chinese": "伊瓦尔，你在说什么？没有人。",
						"french": "Ivar, de quoi tu parles ? Il n'y a personne.",
						"spanish": "Ivar, ¿de qué hablas? No hay nadie.",
						"vietnamese": "Ivar, cậu đang nói gì vậy? Không có ai cả.",
						"thai": "ไอวาร์, พูดอะไรน่ะ? ไม่มีใครเลยนะ.",
						"hindi": "इवर, तुम क्या कह रहे हो? वहाँ कोई नहीं है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니! 들려! 웅성거리는 소리가…! 길 잃은 영혼들의…!",
						"english": "No! I hear it! A murmuring sound...! Of lost souls...!",
						"japanese": "いや！聞こえる！ざわめきが…！迷える魂たちの…！",
						"chinese": "不！我听到了！嘈杂的声音…！是迷失的灵魂们…！",
						"french": "Non ! J'entends ! Un murmure...! Celui des âmes perdues...!",
						"spanish": "¡No! ¡Lo oigo! ¡Un murmullo...! ¡De almas perdidas...!",
						"vietnamese": "Không! Ta nghe thấy! Tiếng xì xào...! Của những linh hồn lạc lối...!",
						"thai": "ไม่! ได้ยิน! เสียงซุบซิบ...! ของวิญญาณที่หลงทาง...!",
						"hindi": "नहीं! मुझे सुनाई दे रहा है! एक फुसफुसाहट...! खोई हुई आत्माओं की...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 벽이 길을 막았다. 그 속에서 무언가 빛나고 있었다.",
						"english": "A massive ice wall blocked the way. Something glowed within it.",
						"japanese": "巨大な氷の壁が道を塞いだ。その中で何かが輝いていた。",
						"chinese": "巨大的冰墙挡住了去路。有什么东西在其中闪耀。",
						"french": "Un mur de glace massif bloquait le chemin. Quelque chose brillait en son sein.",
						"spanish": "Un enorme muro de hielo bloqueaba el camino. Algo brillaba en su interior.",
						"vietnamese": "Một bức tường băng khổng lồ chặn đường. Có thứ gì đó đang phát sáng bên trong.",
						"thai": "กำแพงน้ำแข็งขนาดมหึมากีดขวางทางอยู่ มีบางสิ่งส่องแสงอยู่ภายใน",
						"hindi": "एक विशाल बर्फीली दीवार ने रास्ता रोक दिया। उसके भीतर कुछ चमक रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "이 벽… 평범한 얼음이 아니야.",
						"english": "This wall... it's not ordinary ice.",
						"japanese": "この壁…ただの氷じゃない。",
						"chinese": "这堵墙…不是普通的冰。",
						"french": "Ce mur… ce n'est pas de la glace ordinaire.",
						"spanish": "Esta pared... no es hielo común.",
						"vietnamese": "Bức tường này... không phải băng bình thường.",
						"thai": "กำแพงนี้...ไม่ใช่น้ำแข็งธรรมดา",
						"hindi": "यह दीवार... साधारण बर्फ नहीं है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "봐! 저기! 희미하게 새겨진 글자들… 얼음 패턴이 아니야. 바이킹 룬 문자…!",
						"english": "Look! There! Faintly carved letters...! Not ice patterns. Viking runes...!",
						"japanese": "見て！あれ！かすかに刻まれた文字が…！氷の模様じゃない。ヴァイキングのルーン文字…！",
						"chinese": "看！那里！隐约刻着的文字…！那不是冰的图案。是维京符文…！",
						"french": "Regarde ! Là ! Des lettres faiblement gravées… ! Ce ne sont pas des motifs de glace. Des runes vikings… !",
						"spanish": "¡Mira! ¡Ahí! ¡Letras débilmente grabadas...! No son patrones de hielo. ¡Runas vikingas...!",
						"vietnamese": "Nhìn kìa! Chỗ đó! Những chữ cái được khắc mờ ảo...! Không phải hoa văn băng. Chữ rune Viking...!",
						"thai": "ดูสิ! ตรงนั้น! อักษรที่แกะสลักจางๆ...! ไม่ใช่ลวดลายน้ำแข็ง อักษรรูนไวกิ้ง...!",
						"hindi": "देखो! वहाँ! हल्के से उकेरे गए अक्षर...! बर्फ के पैटर्न नहीं हैं। वाइキング रूण अक्षर...!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환각이겠지. 얼음이 비친 거울 같아.",
						"english": "It must be a hallucination. Like a mirror reflecting off the ice.",
						"japanese": "幻覚だろう。氷に映った鏡のようだ。",
						"chinese": "应该是幻觉吧。就像是冰面映照出的镜子。",
						"french": "Ce doit être une hallucination. Comme un miroir reflété par la glace.",
						"spanish": "Debe ser una alucinación. Como un espejo reflejado por el hielo.",
						"vietnamese": "Chắc là ảo ảnh thôi. Giống như gương phản chiếu trên băng.",
						"thai": "คงเป็นภาพหลอนละมั้ง เหมือนกระจกสะท้อนจากน้ำแข็ง",
						"hindi": "यह मतिभ्रम होगा। जैसे बर्फ में प्रतिबिंबित एक दर्पण।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니, 이건… 울부짖는 얼굴 같아…!",
						"english": "No, this is... like a screaming face...!",
						"japanese": "いや、これは…叫び顔のようだ…！",
						"chinese": "不，这…像是一张哭嚎的脸…！",
						"french": "Non, ceci est… comme un visage hurlant… !",
						"spanish": "¡No, esto es... como un rostro que grita...!",
						"vietnamese": "Không, đây là... như một khuôn mặt đang gào thét...!",
						"thai": "ไม่สิ นี่มัน...เหมือนใบหน้าที่กำลังกรีดร้อง...!",
						"hindi": "नहीं, यह... एक चीखते हुए चेहरे जैसा है...!"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "심연으로 향하는 길. 희망은 얼어붙었다.",
						"english": "The path to the abyss. Hope has frozen over.",
						"japanese": "深淵へと続く道。希望は凍りついた。",
						"chinese": "通往深渊的路。希望已然冻结。",
						"french": "Le chemin vers l'abîme. L'espoir s'est figé.",
						"spanish": "El camino hacia el abismo. La esperanza se ha congelado.",
						"vietnamese": "Con đường dẫn đến vực thẳm. Hy vọng đã đóng băng.",
						"thai": "ทางสู่ห้วงเหว. ความหวังได้กลายเป็นน้ำแข็ง",
						"hindi": "रसातल का रास्ता। उम्मीद जम गई है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 못 가겠어. 다들 제정신이 아니야.",
						"english": "I can't go on. Everyone's losing their minds.",
						"japanese": "もうこれ以上は無理だ。みんな正気じゃない。",
						"chinese": "我不能再走了。大家都不正常了。",
						"french": "Je n'en peux plus. Tout le monde perd la tête.",
						"spanish": "No puedo más. Todos están perdiendo la cordura.",
						"vietnamese": "Tôi không thể đi tiếp được nữa. Mọi người đều mất trí rồi.",
						"thai": "ฉันไปต่อไม่ไหวแล้ว ทุกคนเสียสติไปหมดแล้ว",
						"hindi": "मैं और आगे नहीं जा सकता। सब अपना होश खो रहे हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "나는… 강하다…! 하지만 이 고통은… 끝이 없어…!",
						"english": "I am... strong...! But this pain... it's endless...!",
						"japanese": "私は…強い…！だがこの苦痛は…終わりがない…！",
						"chinese": "我…很强大…！但这痛苦…永无止境…！",
						"french": "Je suis… fort… ! Mais cette douleur… est sans fin… !",
						"spanish": "¡Soy... fuerte...! Pero este dolor... ¡no tiene fin...!",
						"vietnamese": "Ta... mạnh mẽ...! Nhưng nỗi đau này... không hồi kết...!",
						"thai": "ฉัน...แข็งแกร่ง...! แต่ความเจ็บปวดนี้...ไม่มีที่สิ้นสุด...!",
						"hindi": "मैं... मज़बूत हूँ...! लेकिन यह दर्द... अंतहीन है...!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이바르, 정신 차려!",
						"english": "Ivar, snap out of it!",
						"japanese": "イヴァル、しっかりしろ！",
						"chinese": "伊瓦尔，清醒一点！",
						"french": "Ivar, reprends-toi !",
						"spanish": "¡Ivar, recapacita!",
						"vietnamese": "Ivar, tỉnh táo lại đi!",
						"thai": "ไอบาร์ ได้สติหน่อย!",
						"hindi": "इवार, होश में आओ!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우… 이 정도… 나약한 힘으로는… 아무것도… 바뀌지 않아…! 이 순환은… 영원하다…!",
						"english": "Gah... Is this all...? With such weak power... nothing... will change...! This cycle... is eternal...!",
						"japanese": "くっ…これしき…か…こんな…弱い力では…何も…変わらない…！この循環は…永遠だ…！",
						"chinese": "呃…仅仅…如此…吗…凭借这点…弱小的力量…什么也…改变不了…！这个循环…是永恒的…！",
						"french": "Argh… juste… ça… Avec une telle… faible puissance… rien… ne changera… ! Ce cycle… est éternel… !",
						"spanish": "Ugh… apenas… esto… Con un poder tan… débil… ¡nada… cambiará…! ¡Este ciclo… es eterno…!",
						"vietnamese": "Khụ… chỉ… thế này thôi sao… Với sức mạnh… yếu ớt như vậy… chẳng có gì… thay đổi được đâu…! Vòng tuần hoàn này… là vĩnh cửu…!",
						"thai": "อึก… แค่… แค่นี้เองงั้นรึ… ด้วยพลังอัน… อ่อนแอแค่นี้… ไม่มีอะไร… เปลี่ยนแปลงได้หรอก…! วงจรนี้… เป็นนิรันดร์…!",
						"hindi": "उफ़… बस… इतना ही…! इतनी कमज़ोर शक्ति से… कुछ भी… नहीं बदलेगा…! यह चक्र… शाश्वत है…!"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "끝났어. 네놈은 이제 힘을 잃었어.",
						"english": "It's over. You've lost your power.",
						"japanese": "終わった。貴様はもう力を失った。",
						"chinese": "结束了。你已失去力量。",
						"french": "C'est fini. Tu as perdu ton pouvoir.",
						"spanish": "Se acabó. Has perdido tu poder.",
						"vietnamese": "Kết thúc rồi. Ngươi đã mất đi sức mạnh.",
						"thai": "จบแล้ว เจ้าหมดสิ้นพลังแล้ว",
						"hindi": "खत्म। तुमने अपनी शक्ति खो दी है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괴물은 쓰러졌으나, 얼어붙은 영혼들의 속삭임은 멈추지 않았다. 진정한 적은… 아직 모습을 드러내지 않았다.",
						"english": "The monster fell, but the whispers of frozen souls did not cease. The true enemy... has yet to reveal itself.",
						"japanese": "怪物は倒れたが、凍てついた魂たちの囁きは止まらなかった。真の敵は…まだ姿を現していない。",
						"chinese": "怪物已然倒下，然而冰冻灵魂的低语并未停止。真正的敌人…尚未现身。",
						"french": "Le monstre est tombé, mais les murmures des âmes gelées n'ont pas cessé. Le véritable ennemi… ne s'est pas encore montré.",
						"spanish": "El monstruo cayó, pero los susurros de las almas congeladas no cesaron. El verdadero enemigo… aún no se ha revelado.",
						"vietnamese": "Quái vật đã gục ngã, nhưng tiếng thì thầm của những linh hồn đóng băng vẫn không ngừng. Kẻ thù thật sự… vẫn chưa lộ diện.",
						"thai": "ปีศาจร่วงลงแล้ว แต่เสียงกระซิบของวิญญาณที่แข็งค้างก็ยังไม่หยุดนิ่ง ศัตรูที่แท้จริง… ยังไม่ปรากฏตัว",
						"hindi": "राक्षस गिर गया, किंतु जमी हुई आत्माओं की फुसफुसाहट नहीं रुकी। असली शत्रु… अभी सामने नहीं आया है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마침내, 얼음 감옥의 심장부에 닿았다.",
						"english": "Finally, we've reached the heart of the Ice Prison.",
						"japanese": "ついに、氷の牢獄の心臓部に辿り着いた。",
						"chinese": "终于，抵达了冰之牢狱的心脏。",
						"french": "Enfin, nous avons atteint le cœur de la Prison de Glace.",
						"spanish": "Finalmente, hemos alcanzado el corazón de la Prisión de Hielo.",
						"vietnamese": "Cuối cùng, đã đến được trái tim của Ngục Băng.",
						"thai": "ในที่สุด ก็มาถึงใจกลางคุกน้ำแข็งแล้ว",
						"hindi": "आख़िरकार, हम बर्फीले कारावास के हृदय तक पहुँच गए।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네놈들의 약한 정신이, 나를 이끌었다.",
						"english": "Your weak spirits led me here.",
						"japanese": "貴様らの弱い精神が、私を導いたのだ。",
						"chinese": "你们孱弱的精神，将我引至此处。",
						"french": "Vos esprits faibles m'ont guidé ici.",
						"spanish": "Vuestros espíritus débiles me han guiado.",
						"vietnamese": "Tinh thần yếu ớt của các ngươi đã dẫn ta đến đây.",
						"thai": "จิตวิญญาณที่อ่อนแอของพวกเจ้า นำพาข้ามาที่นี่",
						"hindi": "तुम्हारी कमज़ोर आत्माओं ने मुझे यहाँ खींचा।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 환각의 근원인가!",
						"english": "You... are the source of all these illusions!",
						"japanese": "貴様が…この幻覚の根源か！",
						"chinese": "你…就是这一切幻觉的根源吗！",
						"french": "Toi… tu es la source de toutes ces illusions !",
						"spanish": "¡Tú… eres la fuente de todas estas ilusiones!",
						"vietnamese": "Ngươi… là nguồn gốc của tất cả ảo ảnh này sao!",
						"thai": "แก... คือต้นกำเนิดของภาพลวงตาทั้งหมดนี่งั้นรึ!",
						"hindi": "क्या तुम… इन सभी भ्रमों का मूल हो!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 너희의 고통이 나의 양식. 더 큰 절망을 맛보여주마.",
						"english": "Yes. Your suffering is my sustenance. I shall show you greater despair.",
						"japanese": "そうだ。お前たちの苦痛が私の糧。更なる絶望を味わわせてやろう。",
						"chinese": "没错。你们的痛苦是我的食粮。我将让你们尝到更大的绝望。",
						"french": "Oui. Votre souffrance est ma subsistance. Je vous ferai goûter un désespoir plus grand encore.",
						"spanish": "Sí. Vuestro sufrimiento es mi sustento. Os haré probar una desesperación aún mayor.",
						"vietnamese": "Đúng vậy. Nỗi đau của các ngươi là lương thực của ta. Ta sẽ cho các ngươi nếm trải sự tuyệt vọng lớn hơn nữa.",
						"thai": "ใช่แล้ว ความทุกข์ทรมานของพวกเจ้าคืออาหารของข้า ข้าจะให้พวกเจ้าได้ลิ้มรสความสิ้นหวังที่ยิ่งใหญ่กว่านี้",
						"hindi": "हाँ। तुम्हारा कष्ट ही मेरा पोषण है। मैं तुम्हें और भी गहरी निराशा चखाऊँगा।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 일행을 덮쳤다. 다시금, 절망의 나락으로.",
						"english": "A colossal shadow engulfed the party. Once again, into the abyss of despair.",
						"japanese": "巨大な影が一行を覆った。再び、絶望の奈落へ。",
						"chinese": "巨大的阴影笼罩了一行人。再次，坠入绝望的深渊。",
						"french": "Une ombre colossale enveloppa le groupe. Une fois de plus, dans l'abîme du désespoir.",
						"spanish": "Una sombra colosal envolvió al grupo. Una vez más, al abismo de la desesperación.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm lấy đoàn người. Lại một lần nữa, rơi vào vực sâu của tuyệt vọng.",
						"thai": "เงามืดมหึมากลืนกินคณะเดินทาง อีกครั้ง สู่หุบเหวแห่งความสิ้นหวัง",
						"hindi": "एक विशाल छाया ने दल को घेर लिया। फिर एक बार, निराशा के गर्त में।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 너희의 의지는… 영원한 얼음 속에 갇힐 것이다.",
						"english": "Insignificant beings. Your will... shall be trapped in eternal ice.",
						"japanese": "取るに足らない者ども。お前たちの意思は…永遠の氷の中に閉じ込められるだろう。",
						"chinese": "微不足道的存在。你们的意志…将被永远禁锢在冰雪之中。",
						"french": "Êtres insignifiants. Votre volonté… sera piégée dans la glace éternelle.",
						"spanish": "Seres insignificantes. Vuestra voluntad… quedará atrapada en el hielo eterno.",
						"vietnamese": "Những kẻ hèn mọn. Ý chí của các ngươi… sẽ bị giam cầm vĩnh viễn trong băng giá.",
						"thai": "เจ้าพวกไร้ค่า เจตจำนงของพวกเจ้า… จะถูกจองจำในน้ำแข็งนิรันดร์",
						"hindi": "तुच्छ प्राणी। तुम्हारी इच्छा… अनंत बर्फ में कैद रहेगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어…! 다시… 일어설 거야!",
						"english": "It's not... over yet...! I will... rise again!",
						"japanese": "まだ…終わってない…！再び…立ち上がるぞ！",
						"chinese": "还没…结束…！我还会…再次站起来！",
						"french": "Ce n'est pas… encore fini… ! Je me… relèverai !",
						"spanish": "¡Aún… no ha terminado…! ¡Volveré… a levantarme!",
						"vietnamese": "Chưa… kết thúc đâu…! Ta sẽ… đứng dậy một lần nữa!",
						"thai": "ยังไม่… จบแค่นี้หรอก…! ข้าจะ… ลุกขึ้นอีกครั้ง!",
						"hindi": "अभी… खत्म नहीं हुआ है…! मैं… फिर उठ खड़ा होऊंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"극한의 추위. 모든 것이 얼어붙은 시간 속에서.",
			"환각은 현실이 되고, 망상은 그림자가 된다.",
			"그림자 속에서, 죽은 바이킹들의 눈동자가 일행을 쫓는다.",
			"진실은 얼음 속에 갇혀, 조용히 속삭이고 있었다."
		],
		"english": [
			"Extreme cold. In a time where all is frozen.",
			"Hallucinations become reality, delusions become shadows.",
			"In the shadows, the eyes of dead Vikings pursue the party.",
			"The truth, trapped in ice, whispered silently."
		],
		"japanese": [
			"極寒。全てが凍りついた時間の中で。",
			"幻覚は現実となり、妄想は影となる。",
			"影の中で、死せるヴァイキングたちの瞳が一行を追う。",
			"真実は氷に囚われ、静かに囁いていた。"
		],
		"chinese": [
			"极寒。万物冻结之时。",
			"幻觉化为现实，妄想变为阴影。",
			"阴影中，死去的维京人眼睛追逐着一行人。",
			"真相被困在冰中，悄悄低语着。"
		],
		"french": [
			"Froid extrême. Dans un temps où tout est gelé.",
			"Les hallucinations deviennent réalité, les délires des ombres.",
			"Dans les ombres, les yeux des Vikings morts poursuivent le groupe.",
			"La vérité, piégée dans la glace, chuchotait en silence."
		],
		"spanish": [
			"Frío extremo. En un tiempo donde todo está congelado.",
			"Las alucinaciones se vuelven realidad, los delirios sombras.",
			"En las sombras, los ojos de los vikingos muertos persiguen al grupo.",
			"La verdad, atrapada en el hielo, susurraba en silencio."
		],
		"vietnamese": [
			"Cực lạnh. Trong thời gian mọi thứ đóng băng.",
			"Ảo giác thành hiện thực, ảo vọng thành bóng tối.",
			"Trong bóng tối, đôi mắt của những chiến binh Viking đã chết dõi theo đoàn người.",
			"Sự thật bị mắc kẹt trong băng, thì thầm một cách im lặng."
		],
		"thai": [
			"ความหนาวเย็นสุดขีด ในช่วงเวลาที่ทุกสิ่งหยุดนิ่ง.",
			"ภาพหลอนกลายเป็นความจริง ภาพลวงตากลายเป็นเงา.",
			"ในเงามืด ดวงตาของไวกิ้งที่ตายแล้วกำลังไล่ตามคณะ.",
			"ความจริงถูกขังอยู่ในน้ำแข็ง กระซิบอย่างเงียบงัน."
		],
		"hindi": [
			"अत्यधिक ठंड। उस समय में जब सब कुछ जम गया है।",
			"मतिभ्रम वास्तविकता बन जाते हैं, भ्रम छाया बन जाते हैं।",
			"परछाइयों में, मृत वाइकिंग्स की आँखें दल का पीछा करती हैं।",
			"सच्चाई बर्फ़ में फँसी हुई, चुपचाप फुसफुसा रही थी।"
		]
	}
} as const;
