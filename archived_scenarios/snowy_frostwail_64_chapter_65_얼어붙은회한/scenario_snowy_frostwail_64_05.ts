export const scenario_snowy_frostwail_64_05 = {
	"scenario_id": "snowy_frostwail_64_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "pool_FrozenMemory_Frostwail_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 빙벽 너머, 고대 선박의 잔영이 모습을 드러냈다.",
						"english": "Beyond the colossal ice wall, the phantom of an ancient ship emerged.",
						"japanese": "巨大な氷壁の向こう、古代船の残影が姿を現した。",
						"chinese": "巨型冰墙之外，古老船只的残影显现。",
						"french": "Au-delà de l'imposant mur de glace, le fantôme d'un ancien navire apparut.",
						"spanish": "Más allá del colosal muro de hielo, la sombra de una antigua nave apareció.",
						"vietnamese": "Phía sau bức tường băng khổng lồ, bóng ma của một con tàu cổ đại đã hiện ra.",
						"thai": "เบื้องหลังกำแพงน้ำแข็งมหึมา เงาของเรือโบราณก็ปรากฏขึ้น",
						"hindi": "विशाल बर्फ की दीवार के पार, एक प्राचीन जहाज का प्रेत उभरा।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...프로스트웨일?",
						"english": "...Frostwhale?",
						"japanese": "「...フロストウェイル？」",
						"chinese": "“...霜鲸？”",
						"french": "...Frostwhale ?",
						"spanish": "¿...Frostwhale?",
						"vietnamese": "...Frostwhale?",
						"thai": "...ฟรอสต์เวล?",
						"hindi": "...फ्रॉस्टव्हेल?"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "예상했던 것보다 더 거대하네요.",
						"english": "It's even larger than I imagined.",
						"japanese": "「想像していたよりも、さらに巨大ですね。」",
						"chinese": "“比我想象的还要巨大。”",
						"french": "C'est encore plus grand que ce que j'avais imaginé.",
						"spanish": "Es incluso más grande de lo que imaginaba.",
						"vietnamese": "Nó còn lớn hơn tôi tưởng tượng.",
						"thai": "มันใหญ่กว่าที่ฉันจินตนาการไว้มาก",
						"hindi": "यह मेरी कल्पना से भी बड़ा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이곳에서 모든 것이 시작되었고... 끝날 겁니다.",
						"english": "This is where it all began... and where it will end.",
						"japanese": "「全てはここから始まり... ここで終わるでしょう。」",
						"chinese": "“一切都从这里开始... 也将在这里结束。”",
						"french": "Tout a commencé ici... et tout finira ici.",
						"spanish": "Aquí es donde todo comenzó... y donde todo terminará.",
						"vietnamese": "Đây là nơi mọi thứ bắt đầu... và cũng là nơi mọi thứ sẽ kết thúc.",
						"thai": "ที่นี่คือที่ที่ทุกสิ่งเริ่มต้น... และที่ที่มันจะสิ้นสุดลง",
						"hindi": "यह वह जगह है जहाँ सब कुछ शुरू हुआ... और जहाँ यह सब खत्म होगा।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 아는 거지?",
						"english": "What do you know?",
						"japanese": "「一体何を識っている？」",
						"chinese": "“你知道些什么？”",
						"french": "Qu'est-ce que tu sais ?",
						"spanish": "¿Qué sabes?",
						"vietnamese": "Ngươi biết gì?",
						"thai": "คุณรู้อะไรบ้าง?",
						"hindi": "तुम क्या जानते हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그저... 기록할 뿐입니다. 반복되는 이야기를.",
						"english": "I merely... record. The story that repeats.",
						"japanese": "「ただ... 記録しているだけです。繰り返される物語を。」",
						"chinese": "“我只是... 记录。这重复的故事。”",
						"french": "Je ne fais que... consigner. L'histoire qui se répète.",
						"spanish": "Simplemente... registro. La historia que se repite.",
						"vietnamese": "Tôi chỉ... ghi lại. Câu chuyện lặp đi lặp lại.",
						"thai": "ฉันแค่... บันทึก เรื่องราวที่ซ้ำรอยเดิม",
						"hindi": "मैं बस... रिकॉर्ड करता हूँ। वह कहानी जो दोहराती है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "선박의 잔해는 거대한 빙하와 하나가 되어 있었다.",
						"english": "The ship's wreckage had become one with the colossal glacier.",
						"japanese": "「船の残骸は巨大な氷河と一体となっていた。」",
						"chinese": "“船只残骸已与巨大的冰川融为一体。”",
						"french": "L'épave du navire ne faisait qu'un avec le gigantesque glacier.",
						"spanish": "Los restos del barco se habían fusionado con el colosal glaciar.",
						"vietnamese": "Xác tàu đã hòa làm một với tảng băng khổng lồ.",
						"thai": "ซากเรือกลายเป็นหนึ่งเดียวกับธารน้ำแข็งขนาดมหึมา",
						"hindi": "जहाज का मलबा विशाल ग्लेशियर के साथ एक हो गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어딘가에서... 낡은 노 젓는 소리가 들려.",
						"english": "From somewhere... the sound of old oars creaks.",
						"japanese": "「どこからか... 古い櫂の軋む音が聞こえる。」",
						"chinese": "“从某个地方... 传来旧桨的吱呀声。”",
						"french": "Quelque part... le grincement de vieilles rames se fait entendre.",
						"spanish": "De algún lugar... el chirrido de viejos remos se oye.",
						"vietnamese": "Từ đâu đó... tiếng mái chèo cũ kĩ kẽo kẹt.",
						"thai": "จากที่ไหนสักแห่ง... เสียงพายเก่าๆ ดังเอี๊ยดอ๊าด",
						"hindi": "कहीं से... पुरानी चप्पू की आवाज आती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그들은 아직도 고향으로 향하고 있습니다.",
						"english": "They are still heading home.",
						"japanese": "「彼らはまだ故郷へと向かっている。」",
						"chinese": "“他们仍在归乡的路上。”",
						"french": "Ils rentrent toujours chez eux.",
						"spanish": "Todavía se dirigen a casa.",
						"vietnamese": "Họ vẫn đang hướng về quê hương.",
						"thai": "พวกเขายังคงมุ่งหน้ากลับบ้าน",
						"hindi": "वे अभी भी घर की ओर बढ़ रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원히 닿을 수 없는 길을 말이죠.",
						"english": "On a path they can never truly reach.",
						"japanese": "「永遠に辿り着けない道を。」",
						"chinese": "“踏上那条永远无法抵达的道路。”",
						"french": "Sur un chemin qu'ils ne pourront jamais atteindre.",
						"spanish": "Por un camino que nunca podrán alcanzar.",
						"vietnamese": "Trên một con đường không bao giờ có thể tới được.",
						"thai": "บนเส้นทางที่พวกเขาไม่มีวันไปถึง",
						"hindi": "एक ऐसे रास्ते पर जहाँ वे कभी नहीं पहुँच सकते।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...그게 무슨 소리야?",
						"english": "...What does that mean?",
						"japanese": "「...どういう意味だ？」",
						"chinese": "“...那是什么意思？”",
						"french": "...Qu'est-ce que ça veut dire ?",
						"spanish": "¿...Qué significa eso?",
						"vietnamese": "...Điều đó có nghĩa là gì?",
						"thai": "...นั่นหมายความว่าอะไร?",
						"hindi": "...उसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 땅의 모든 시간은 그들의 갈망 속에 멈춰있으니까요.",
						"english": "All time here is frozen in their longing.",
						"japanese": "この地の時は、彼らの渇望の中に止まっているからだ。",
						"chinese": "这片土地上的所有时间都停滞在他们的渴望之中。",
						"french": "Tout le temps sur cette terre est figé dans leur désir ardent.",
						"spanish": "Todo el tiempo en esta tierra está suspendido en su anhelo.",
						"vietnamese": "Mọi thời gian trên vùng đất này đều ngừng lại trong nỗi khát khao của họ.",
						"thai": "เวลาทั้งหมดบนผืนดินนี้หยุดนิ่งอยู่ในความปรารถนาของพวกเขา",
						"hindi": "इस भूमि पर सारा समय उनकी लालसा में रुका हुआ है।"
					},
					"speaker": "eira"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음으로 뒤덮인 갑판, 부서진 돛대가 뼈대처럼 솟아 있었다.",
						"english": "Ice-covered deck, broken mast rising like a skeleton.",
						"japanese": "氷に覆われた甲板、折れたマストが骨格のようにそびえていた。",
						"chinese": "冰封的甲板，折断的桅杆像骨架般耸立着。",
						"french": "Pont couvert de glace, mât brisé se dressant comme un squelette.",
						"spanish": "Cubierta cubierta de hielo, mástil roto que se alzaba como un esqueleto.",
						"vietnamese": "Boong tàu phủ băng, cột buồm gãy trơ trọi như bộ xương.",
						"thai": "ดาดฟ้าปกคลุมด้วยน้ำแข็ง เสากระโดงเรือที่หักตั้งตระหง่านราวกับโครงกระดูก",
						"hindi": "बर्फ से ढका डेक, टूटा हुआ मस्तूल कंकाल की तरह खड़ा था।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이곳의 시간은... 움직이지 않는 것 같아.",
						"english": "Time here... seems frozen.",
						"japanese": "ここでは時間が…動いていないようだ。",
						"chinese": "这里的时间……好像没有流动。",
						"french": "Le temps ici... semble figé.",
						"spanish": "El tiempo aquí... parece no moverse.",
						"vietnamese": "Thời gian ở đây... dường như không trôi.",
						"thai": "เวลาที่นี่... ดูเหมือนจะไม่เดินเลย",
						"hindi": "यहाँ का समय... रुका हुआ लगता है।"
					}
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그들의 절박한 염원이 이 세계의 순환마저 멈춰 세웠습니다.",
						"english": "Their desperate pleas halted even the world's cycle.",
						"japanese": "彼らの切なる願いが、この世界の循環すら止めてしまったのです。",
						"chinese": "他们绝望的祈愿甚至停止了世界的循环。",
						"french": "Leurs vœux désespérés ont même arrêté le cycle de ce monde.",
						"spanish": "Sus ruegos desesperados detuvieron incluso el ciclo de este mundo.",
						"vietnamese": "Nguyện vọng tuyệt vọng của họ đã ngăn chặn cả vòng tuần hoàn của thế giới này.",
						"thai": "คำวิงวอนอันสิ้นหวังของพวกเขาได้หยุดยั้งแม้แต่การหมุนเวียนของโลกใบนี้",
						"hindi": "उनकी हताश इच्छाओं ने इस दुनिया के चक्र को भी रोक दिया।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "...말도 안 돼.",
						"english": "...Impossible.",
						"japanese": "…信じられない。",
						"chinese": "……不可能。",
						"french": "...Impensable.",
						"spanish": "...Imposible.",
						"vietnamese": "...Không thể nào.",
						"thai": "...ไม่จริงน่า",
						"hindi": "...असंभव।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "진실은 늘 잔혹한 법이죠.",
						"english": "The truth is always cruel.",
						"japanese": "真実は常に残酷なものですよ。",
						"chinese": "真相总是残酷的。",
						"french": "La vérité est toujours cruelle.",
						"spanish": "La verdad siempre es cruel.",
						"vietnamese": "Sự thật luôn tàn khốc.",
						"thai": "ความจริงมักจะโหดร้ายเสมอ",
						"hindi": "सच हमेशा क्रूर होता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "선박의 가장 깊은 곳, 거대한 룬 문자들이 얼음 속에서 차갑게 빛나고 있었다.",
						"english": "Deepest part of the ship, giant runes glowed coldly in the ice.",
						"japanese": "船の最深部、巨大なルーン文字が氷の中で冷たく輝いていた。",
						"chinese": "船体最深处，巨大的符文在冰中散发着寒光。",
						"french": "Au plus profond du navire, de gigantesques runes brillaient froidement dans la glace.",
						"spanish": "En lo más profundo del barco, runas gigantes brillaban fríamente en el hielo.",
						"vietnamese": "Sâu nhất trong con tàu, những ký tự rune khổng lồ tỏa sáng lạnh lẽo trong băng.",
						"thai": "ส่วนที่ลึกที่สุดของเรือ อักษรรูนขนาดยักษ์ส่องแสงเย็นยะเยือกในน้ำแข็ง",
						"hindi": "जहाज के सबसे गहरे हिस्से में, विशालकाय रूण अक्षर बर्फ में ठंडी चमक रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 룬 문자들... 고통스러워 보여.",
						"english": "Those runes... they look pained.",
						"japanese": "あのルーン文字…苦しそうに見える。",
						"chinese": "那些符文……看起来很痛苦。",
						"french": "Ces runes... elles semblent souffrir.",
						"spanish": "Esas runas... parecen sufrir.",
						"vietnamese": "Những ký tự rune đó... trông thật đau đớn.",
						"thai": "อักษรรูนเหล่านั้น... ดูเจ็บปวด",
						"hindi": "वे रूण अक्षर... दर्दनाक लग रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "수백 년 전의 맹세, 그리고 지켜지지 못한 약속.",
						"english": "An oath from centuries past, and a promise unkept.",
						"japanese": "数百年前の誓い、そして守られなかった約束。",
						"chinese": "数百年前的誓言，以及未能遵守的承诺。",
						"french": "Un serment d'il y a des siècles, et une promesse non tenue.",
						"spanish": "Un juramento de siglos atrás y una promesa incumplida.",
						"vietnamese": "Một lời thề từ nhiều thế kỷ trước, và một lời hứa không được giữ.",
						"thai": "คำสาบานเมื่อหลายร้อยปีก่อน และคำสัญญาที่ไม่ได้รักษาไว้",
						"hindi": "सदियों पहले की शपथ, और एक अधूरा वादा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그들의 집단적 죄책감이 이 모든 것을 만들었죠.",
						"english": "Their collective guilt created all of this.",
						"japanese": "彼らの集合的な罪悪感が、これらすべてを生み出したのです。",
						"chinese": "他们的集体罪恶感创造了这一切。",
						"french": "Leur culpabilité collective a créé tout cela.",
						"spanish": "Su culpa colectiva creó todo esto.",
						"vietnamese": "Cảm giác tội lỗi tập thể của họ đã tạo ra tất cả những điều này.",
						"thai": "ความรู้สึกผิดร่วมกันของพวกเขาได้สร้างสิ่งเหล่านี้ทั้งหมด",
						"hindi": "उनके सामूहिक अपराधबोध ने यह सब बनाया।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이제... 이 비극을 멈춰야 해.",
						"english": "Now... I must stop this tragedy.",
						"japanese": "もう... この悲劇を止めなければならない。",
						"chinese": "现在... 我必须阻止这场悲剧。",
						"french": "Maintenant... Je dois arrêter cette tragédie.",
						"spanish": "Ahora... Debo detener esta tragedia.",
						"vietnamese": "Giờ đây... Tôi phải chấm dứt bi kịch này.",
						"thai": "ตอนนี้... ฉันต้องหยุดโศกนาฏกรรมนี้.",
						"hindi": "अब... मुझे इस त्रासदी को रोकना होगा।"
					}
				},
				{
					"content": {
						"korean": "당신의 승리가... 과연 무엇을 가져올까요?",
						"english": "What will your victory... truly bring?",
						"japanese": "あなたの勝利が... 一体何をもたらすというのか？",
						"chinese": "你的胜利... 究竟会带来什么？",
						"french": "Que vous apportera... votre victoire, au juste ?",
						"spanish": "¿Qué traerá... tu victoria, en realidad?",
						"vietnamese": "Liệu chiến thắng của ngươi... sẽ thực sự mang lại điều gì?",
						"thai": "ชัยชนะของเจ้า... แท้จริงแล้วจะนำมาซึ่งอะไร?",
						"hindi": "तुम्हारी जीत... आखिर क्या लाएगी?"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "프로스트웨일의 얼음 파편이 모든 것을 꿰뚫었다.",
						"english": "Frostwhale's ice shards pierced through everything.",
						"japanese": "フロストウェイルの氷の破片が全てを貫いた。",
						"chinese": "霜鲸的冰碎片穿透了一切。",
						"french": "Les éclats de glace de Frostwhale transpercèrent tout.",
						"spanish": "Los fragmentos de hielo de Frostwhale lo perforaron todo.",
						"vietnamese": "Mảnh băng của Cá Voi Băng giá xuyên qua mọi thứ.",
						"thai": "เกล็ดน้ำแข็งของฟรอสต์เวลล์เจาะทะลุทุกสิ่ง",
						"hindi": "फ्रॉस्टव्हेल के बर्फ के टुकड़े ने सब कुछ भेद दिया।"
					}
				},
				{
					"content": {
						"korean": "...결국, 너도... 이 바다에 갇힐 운명.",
						"english": "...In the end, you too... are destined to be trapped in this sea.",
						"japanese": "...結局、お前も…この海に囚われる運命。",
						"chinese": "...最终，你也将...被困在这片海中。",
						"french": "...Au final, toi aussi... es destiné à être piégé dans cette mer.",
						"spanish": "...Al final, tú también... estás destinado a quedar atrapado en este mar.",
						"vietnamese": "...Cuối cùng, ngươi cũng... số phận bị mắc kẹt trong biển này.",
						"thai": "...ในที่สุด เจ้าเองก็... ถูกกักขังอยู่ในทะเลนี้ชะตาเดียวกัน",
						"hindi": "...आखिरकार, तुम भी... इस समुद्र में फंसने के लिए नियत हो।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "...아직... 포기할 수 없어!",
						"english": "...Still... I can't give up!",
						"japanese": "...まだ…諦められない！",
						"chinese": "...我不能...放弃！",
						"french": "...Je ne peux pas... abandonner !",
						"spanish": "...¡Todavía... no puedo rendirme!",
						"vietnamese": "...Vẫn... không thể từ bỏ!",
						"thai": "...ยัง... ยอมแพ้ไม่ได้!",
						"hindi": "...अभी तक... मैं हार नहीं मान सकता!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 거대한 프로스트웨일이 모든 것을 집어삼킬 듯 솟아올랐다.",
						"english": "Finally, the colossal Frostwhale rose, as if to swallow everything.",
						"japanese": "ついに、巨大なフロストウェイルがすべてを飲み込むかのように現れた。",
						"chinese": "终于，巨大的霜鲸腾空而起，仿佛要吞噬一切。",
						"french": "Enfin, la gigantesque Baleine de Givre surgit, comme pour tout engloutir.",
						"spanish": "Finalmente, la colosal Ballena de Escarcha se alzó, como si fuera a tragarse todo.",
						"vietnamese": "Cuối cùng, Frostwhale khổng lồ trỗi dậy, như thể nuốt chửng mọi thứ.",
						"thai": "ในที่สุด วาฬน้ำแข็งยักษ์ก็ผุดขึ้นมา ราวกับจะกลืนกินทุกสิ่ง.",
						"hindi": "अंततः, विशाल फ्रॉस्टव्हेल सब कुछ निगलने को तैयार, ऊपर उठा।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "...이 길은 멈출 수 없어... 고향... 고향으로...!",
						"english": "...This path cannot be stopped... Home... To home...!",
						"japanese": "...この道は止められない... 故郷... 故郷へ...!",
						"chinese": "...这条路无法停止... 故乡... 回故乡...！",
						"french": "...Ce chemin ne peut être arrêté... Foyer... Vers le foyer...!",
						"spanish": "...Este camino no puede detenerse... Hogar... ¡Al hogar...!",
						"vietnamese": "...Con đường này không thể dừng lại... Quê hương... Về quê hương...!",
						"thai": "...เส้นทางนี้หยุดไม่ได้... บ้านเกิด... สู่บ้านเกิด...!",
						"hindi": "...यह रास्ता रुक नहीं सकता... घर... घर की ओर...!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "여기가 끝이야!",
						"english": "This is the end!",
						"japanese": "ここが終わりだ！",
						"chinese": "到此为止！",
						"french": "C'est la fin !",
						"spanish": "¡Aquí termina!",
						"vietnamese": "Đây là kết thúc!",
						"thai": "นี่คือจุดจบ!",
						"hindi": "यहीं सब खत्म!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "너도... 헛된 희망을 쫓는 자인가. 이 고통을 이해할 리 없어.",
						"english": "Are you also... one who chases vain hopes? You couldn't possibly understand this pain.",
						"japanese": "お前も... 虚しい希望を追う者か。この苦痛を理解できるはずがない。",
						"chinese": "你也... 是追逐虚妄希望之人吗？你不可能理解这份痛苦。",
						"french": "Toi aussi... poursuis-tu de vains espoirs ? Tu ne peux pas comprendre cette douleur.",
						"spanish": "¿Tú también... persigues esperanzas vanas? No podrías entender este dolor.",
						"vietnamese": "Ngươi cũng... là kẻ theo đuổi hy vọng hão huyền sao? Ngươi không thể nào hiểu được nỗi đau này.",
						"thai": "เจ้าเองก็... เป็นผู้ไล่ตามความหวังที่เปล่าประโยชน์หรือ? เจ้าไม่มีทางเข้าใจความเจ็บปวดนี้ได้หรอก.",
						"hindi": "क्या तुम भी... व्यर्थ की आशाएं पीछा करने वाले हो? तुम इस दर्द को समझ नहीं सकते।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 위한 고향이야! 이 비극을 끝내겠어!",
						"english": "What home is this for! I will end this tragedy!",
						"japanese": "何のための故郷だ！この悲劇を終わらせる！",
						"chinese": "为了什么故乡！我要结束这场悲剧！",
						"french": "Quel foyer est-ce là ! Je mettrai fin à cette tragédie !",
						"spanish": "¡¿Para qué hogar?! ¡Terminaré con esta tragedia!",
						"vietnamese": "Quê hương vì cái gì! Ta sẽ kết thúc bi kịch này!",
						"thai": "บ้านเกิดเพื่ออะไรกัน! ฉันจะยุติโศกนาฏกรรมนี้!",
						"hindi": "किस घर के लिए! मैं इस त्रासदी को खत्म करूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 선체가 산산이 부서지며, 고대 룬 문자들이 섬광처럼 폭발했다.",
						"english": "The colossal ice hull shattered, and ancient runic letters exploded like flashes of light.",
						"japanese": "巨大な氷の船体が粉々に砕け散り、古代のルーン文字が閃光のように爆発した。",
						"chinese": "巨大的冰船体四分五裂，古老的符文像闪光一样爆发。",
						"french": "La coque de glace colossale se brisa en mille morceaux, et d'anciennes runes explosèrent comme des éclairs.",
						"spanish": "El colosal casco de hielo se hizo añicos, y antiguas runas explotaron como destellos.",
						"vietnamese": "Vỏ băng khổng lồ vỡ tan tành, và những chữ rune cổ đại bùng nổ như những tia chớp.",
						"thai": "ตัวเรือน้ำแข็งมหึมาแตกกระจาย และอักษรรูนโบราณก็ระเบิดเป็นแสงวาบ.",
						"hindi": "विशाल बर्फ़ीला ढाँचा टूट गया, और प्राचीन रुनिक अक्षर चमक की तरह फट गए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수백 명의 투명한 바이킹 전사들이 환영처럼 나타나 낡은 노를 젓는 시늉을 하며 사라졌다.",
						"english": "Hundreds of transparent Viking warriors appeared like phantoms, miming rowing old oars, then vanished.",
						"japanese": "数百の透明なヴァイキング戦士たちが幻影のように現れ、古びたオールを漕ぐ仕草をして消えていった。",
						"chinese": "数百名透明的维京战士如幻影般出现，模仿划着旧桨，然后消失了。",
						"french": "Des centaines de guerriers vikings transparents apparurent comme des fantômes, mimant l'action de ramer avec de vieilles rames, puis disparurent.",
						"spanish": "Cientos de guerreros vikingos transparentes aparecieron como fantasmas, simulando remar con viejos remos, y luego se desvanecieron.",
						"vietnamese": "Hàng trăm chiến binh Viking trong suốt xuất hiện như những bóng ma, giả vờ chèo những mái chèo cũ rồi biến mất.",
						"thai": "นักรบไวกิ้งโปร่งแสงหลายร้อยคนปรากฏขึ้นราวกับภาพลวงตา พายเรือเก่าๆ และหายไป.",
						"hindi": "सैकड़ों पारदर्शी वाइकिंग योद्धा भूतों की तरह प्रकट हुए, पुराने चप्पू चलाने का अभिनय करते हुए गायब हो गए।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "...헛된 몸부림... 너도... 결국... 고향... 고향으로...!",
						"english": "...A futile struggle... You too... in the end... Home... To home...!",
						"japanese": "...無駄なもがき... お前も... 結局... 故郷... 故郷へ...!",
						"chinese": "...徒劳的挣扎... 你也... 终究... 故乡... 回故乡...！",
						"french": "...Une lutte vaine... Toi aussi... finalement... Foyer... Vers le foyer...!",
						"spanish": "...Una lucha inútil... Tú también... al final... Hogar... ¡Al hogar...!",
						"vietnamese": "...Một cuộc giằng co vô ích... Ngươi cũng... cuối cùng... Quê hương... Về quê hương...!",
						"thai": "...ความดิ้นรนที่ไร้ประโยชน์... เจ้าเองก็... ในที่สุด... บ้านเกิด... สู่บ้านเกิด...!",
						"hindi": "...व्यर्थ का संघर्ष... तुम भी... अंततः... घर... घर की ओर...!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "...끝난 건가? 왜... 이 기분은...",
						"english": "...Is it over? Why... this feeling...",
						"japanese": "...終わったのか？なぜ…この気持ちは…",
						"chinese": "...结束了吗？为什么...这种感觉...",
						"french": "...C'est fini ? Pourquoi... ce sentiment...",
						"spanish": "...¿Ha terminado? ¿Por qué... este sentimiento...?",
						"vietnamese": "...Kết thúc rồi sao? Sao... cảm giác này...",
						"thai": "...จบแล้วเหรอ? ทำไม...ความรู้สึกนี้...",
						"hindi": "...क्या यह खत्म हो गया? क्यों... यह भावना..."
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 모든 것이 반복되는 비극의 일부였습니다.",
						"english": "All of this was part of a repeating tragedy.",
						"japanese": "これら全ては、繰り返される悲劇の一部だった。",
						"chinese": "这一切都是一场重复悲剧的一部分。",
						"french": "Tout cela faisait partie d'une tragédie sans fin.",
						"spanish": "Todo esto fue parte de una tragedia repetida.",
						"vietnamese": "Tất cả những điều này là một phần của bi kịch lặp đi lặp lại.",
						"thai": "ทั้งหมดนี้เป็นส่วนหนึ่งของโศกนาฏกรรมที่ซ้ำรอย",
						"hindi": "यह सब एक दोहराई जाने वाली त्रासदी का हिस्सा था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신의 승리마저도요. 이 굴레는... 영원히 끊을 수 없습니다.",
						"english": "Even your victory. This cycle... cannot be broken, ever.",
						"japanese": "あなたの勝利ですら。この輪廻は…永遠に断ち切れません。",
						"chinese": "甚至你的胜利。这个循环...永远无法打破。",
						"french": "Même votre victoire. Ce cycle... ne peut être brisé, jamais.",
						"spanish": "Incluso tu victoria. Este ciclo... no se puede romper, nunca.",
						"vietnamese": "Ngay cả chiến thắng của bạn cũng vậy. Vòng luẩn quẩn này... không thể phá vỡ được, mãi mãi.",
						"thai": "แม้แต่ชัยชนะของคุณ วงจรนี้... ไม่มีวันแตกหัก",
						"hindi": "आपकी जीत भी। यह चक्र... कभी नहीं टूट सकता।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "...내가 뭘 한 거지...?",
						"english": "...What have I done...?",
						"japanese": "...私は何を…",
						"chinese": "...我做了什么...?",
						"french": "...Qu'ai-je fait...?",
						"spanish": "...¿Qué he hecho...?",
						"vietnamese": "...Mình đã làm gì vậy...?",
						"thai": "...ฉันทำอะไรลงไป...?",
						"hindi": "...मैंने क्या किया...?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "승리했으나, 찾아온 것은 깊은 허무함과 끊을 수 없는 죄책감이었다.",
						"english": "Victory was achieved, but what came was deep emptiness and an unshakeable guilt.",
						"japanese": "勝利は得たが、訪れたのは深い虚無感と拭いきれない罪悪感だった。",
						"chinese": "虽然取得了胜利，但随之而来的是深深的空虚和无法摆脱的罪恶感。",
						"french": "La victoire fut acquise, mais ce qui vint fut un vide profond et une culpabilité inébranlable.",
						"spanish": "Se logró la victoria, pero lo que llegó fue un vacío profundo y una culpa inquebrantable.",
						"vietnamese": "Chiến thắng đã đạt được, nhưng cái đến là sự trống rỗng sâu sắc và cảm giác tội lỗi không thể lay chuyển.",
						"thai": "ชัยชนะมาพร้อมกับความว่างเปล่าและความรู้สึกผิดที่ไม่อาจลบเลือน",
						"hindi": "जीत हासिल हुई, लेकिन इसके साथ गहरी शून्यता और एक अटूट अपराधबोध आया।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "이 승리는, 또 다른 시작에 불과했다.",
						"english": "This victory was merely another beginning.",
						"japanese": "この勝利は、ただの新たな始まりに過ぎなかった。",
						"chinese": "这场胜利，不过是另一个开始。",
						"french": "Cette victoire n'était qu'un autre début.",
						"spanish": "Esta victoria fue solo otro comienzo.",
						"vietnamese": "Chiến thắng này, chỉ là một khởi đầu khác.",
						"thai": "ชัยชนะนี้เป็นเพียงจุดเริ่มต้นอีกครั้งเท่านั้น",
						"hindi": "यह जीत, बस एक और शुरुआत थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"영원히 얼어붙은 설원, 그 심장부에 닿았다.",
			"수백 년의 비극이 기다리는 곳. 프로스트웨일.",
			"모든 진실이 얼음 속에 잠들어 있었다.",
			"그리고 그 끝에는, 승리마저 허무할 운명이 기다리고 있었다."
		],
		"english": [
			"Reached the heart of the eternally frozen wasteland.",
			"Where centuries of tragedy await. Frostwhale.",
			"All truth lay dormant in the ice.",
			"And at its end, a fate where even victory felt in vain."
		],
		"japanese": [
			"永遠に凍りついた雪原、その心臓部に辿り着いた。",
			"数世紀の悲劇が待つ場所。フロストウェイル。",
			"全ての真実が氷の中に眠っていた。",
			"そしてその果てには、勝利さえも虚しい運命が待っていた。"
		],
		"chinese": [
			"抵达了永恒冰封雪原的心脏地带。",
			"百年悲剧之地。霜鲸。",
			"所有真相都沉睡在冰中。",
			"而其尽头，即使胜利也虚无的命运正在等待。"
		],
		"french": [
			"Atteint le cœur de l'étendue gelée éternelle.",
			"Où des siècles de tragédie attendent. Frostwhale.",
			"Toute la vérité reposait dormante dans la glace.",
			"Et à sa fin, un destin où même la victoire semblait vaine."
		],
		"spanish": [
			"Alcanzado el corazón de la tundra eternamente congelada.",
			"Donde siglos de tragedia aguardan. Frostwhale.",
			"Toda la verdad yacía dormida en el hielo.",
			"Y al final, un destino donde incluso la victoria se sentía en vano."
		],
		"vietnamese": [
			"Đã đến trung tâm của vùng đất hoang sơ băng giá vĩnh cửu.",
			"Nơi hàng thế kỷ bi kịch đang chờ đợi. Frostwhale.",
			"Mọi sự thật đều ngủ yên trong băng.",
			"Và ở cuối cùng, một số phận nơi ngay cả chiến thắng cũng vô ích."
		],
		"thai": [
			"เดินทางถึงใจกลางของทุ่งน้ำแข็งที่เยือกแข็งชั่วนิรันดร์",
			"ที่ซึ่งโศกนาฏกรรมนับศตวรรษรออยู่ ฟรอสต์เวล",
			"ความจริงทั้งหมดหลับใหลอยู่ในน้ำแข็ง",
			"และในท้ายที่สุด ชะตากรรมที่แม้แต่ชัยชนะก็ดูไร้ค่าก็รออยู่"
		],
		"hindi": [
			"अनन्त काल तक जमी हुई बंजर भूमि के हृदय तक पहुँच गया。",
			"जहाँ सदियों की त्रासदी इंतज़ार कर रही है। फ्रॉस्टवेल।",
			"सभी सच्चाई बर्फ में निष्क्रिय पड़ी थी।",
			"और उसके अंत में, एक ऐसी नियति थी जहाँ जीत भी व्यर्थ लगती थी।"
		]
	},
	"epilogue": {
		"korean": [
			"거대한 선박의 잔해는 조용히 얼어붙은 바다로 가라앉았다.",
			"승리했으나, 아무것도 변하지 않았다. 단지 새로운 반복의 시작일 뿐.",
			"얼어붙은 바다는 여전히 속삭였다. 고향으로... 고향으로...",
			"이곳에 영원히 갇힌 자들의 회한은 끝나지 않았다.",
			"결국, 모두가 영원한 유배에 갇힌 채였다."
		],
		"english": [
			"The colossal ship's wreckage silently sank into the frozen sea.",
			"Victory achieved, yet nothing changed. Merely the start of a new cycle.",
			"The frozen sea still whispered. Home... home...",
			"The regrets of those eternally trapped here never ceased.",
			"Ultimately, all remained trapped in eternal exile."
		],
		"japanese": [
			"巨大な船の残骸は、静かに凍てついた海へと沈んでいった。",
			"勝利はしたが、何も変わらなかった。ただ新たな繰り返しの始まりに過ぎない。",
			"凍てついた海は、依然としてささやいていた。故郷へ…故郷へ…",
			"ここに永遠に囚われた者たちの後悔は終わらなかった。",
			"結局、皆が永遠の追放に囚われたままだった。"
		],
		"chinese": [
			"巨船残骸悄然沉入冰冻之海。",
			"虽胜，但一切未变。不过是新一轮循环的开始。",
			"冰冻之海仍在低语。回家……回家……",
			"永远被困于此者的悔恨从未停止。",
			"最终，所有人皆困于永恒的流放之中。"
		],
		"french": [
			"L'épave du navire colossal sombra silencieusement dans la mer gelée.",
			"Victoire acquise, pourtant rien n'a changé. Seulement le début d'un nouveau cycle.",
			"La mer gelée chuchotait toujours. Chez soi... chez soi...",
			"Les regrets de ceux qui sont éternellement piégés ici n'ont jamais cessé.",
			"En fin de compte, tous sont restés piégés dans un exil éternel."
		],
		"spanish": [
			"Los restos del colosal barco se hundieron silenciosamente en el mar helado.",
			"Se logró la victoria, pero nada cambió. Meramente el comienzo de un nuevo ciclo.",
			"El mar congelado aún susurraba. Hogar... hogar...",
			"Los remordimientos de quienes están eternamente atrapados aquí nunca cesaron.",
			"Finalmente, todos permanecieron atrapados en un exilio eterno."
		],
		"vietnamese": [
			"Xác con tàu khổng lồ lặng lẽ chìm vào biển băng.",
			"Chiến thắng đã đạt được, nhưng không gì thay đổi. Chỉ là khởi đầu của một vòng lặp mới.",
			"Biển băng vẫn thì thầm. Về nhà... về nhà...",
			"Những hối tiếc của những người bị mắc kẹt vĩnh viễn ở đây không bao giờ dứt.",
			"Cuối cùng, tất cả đều bị mắc kẹt trong cuộc sống lưu đày vĩnh cửu."
		],
		"thai": [
			"ซากเรือขนาดมหึมาจมลงสู่ทะเลน้ำแข็งอย่างเงียบงัน",
			"แม้จะได้รับชัยชนะ แต่ก็ไม่มีอะไรเปลี่ยนแปลง เป็นเพียงจุดเริ่มต้นของการวนซ้ำครั้งใหม่",
			"ทะเลน้ำแข็งยังคงกระซิบ บ้าน... บ้าน...",
			"ความเสียใจของผู้ที่ติดกับดักที่นี่ชั่วนิรันดร์ไม่เคยสิ้นสุดลง",
			"ในที่สุด ทุกคนก็ยังคงติดอยู่ในแดนเนรเทศชั่วนิรันดร์"
		],
		"hindi": [
			"विशाल जहाज का मलबा चुपचाप जमे हुए समुद्र में डूब गया।",
			"जीत हासिल हुई, फिर भी कुछ नहीं बदला। केवल एक नए चक्र की शुरुआत।",
			"जमा हुआ समुद्र अभी भी फुसफुसा रहा था। घर... घर...",
			"यहाँ हमेशा के लिए फंसे लोगों का पछतावा कभी खत्म नहीं हुआ।",
			"अंततः, सभी शाश्वत निर्वासन में फंसे रहे।"
		]
	}
} as const;
